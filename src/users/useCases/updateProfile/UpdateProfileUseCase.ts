import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { User } from "@users/entities/User";

export type UpdateProfileDTO = {
    userId: string;
    new_name: string;
    new_email: string;
    new_password?: string;
    old_password?: string;
};

@injectable()
export class UpdateProfileUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        userId,
        new_name,
        new_email,
        new_password,
        old_password,
    }: UpdateProfileDTO): Promise<User> {
        const user = await this.usersRepository.findById(userId);
        if (!user) {
            throw new AppError("User not found", 404);
        }

        const userUpdateEmail = await this.usersRepository.findByEmail(
            new_email,
        );
        if (userUpdateEmail && userUpdateEmail.id != userId) {
            throw new AppError("There is already one user with this email");
        }

        if (new_password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if (!checkOldPassword) {
                throw new AppError("Old password does not match");
            }

            user.password = await hash(new_password, 10);
        }

        user.name = new_name;
        user.email = new_email;

        return this.usersRepository.save(user);
    }
}
