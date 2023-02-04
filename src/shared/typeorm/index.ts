import { Role } from "@roles/entities/Role";
import { RefreshToken } from "@users/entities/RefreshToken";
import { User } from "@users/entities/User";
import { DataSource } from "typeorm";
import { CreateRolesTable1674397560133 } from "./migrations/1674397560133-CreateRolesTable";
import { CreateUsersTable1674862649254 } from "./migrations/1674862649254-CreateUsersTable";
import { AddRoleIdToUsersTable1674863189664 } from "./migrations/1674863189664-AddRoleIdToUsersTable";
import { CreateRefreshTokensTable1675470119684 } from "./migrations/1675470119684-CreateRefreshTokensTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role, User, RefreshToken],
    migrations: [
        CreateRolesTable1674397560133,
        CreateUsersTable1674862649254,
        AddRoleIdToUsersTable1674863189664,
        CreateRefreshTokensTable1675470119684,
    ],
});
