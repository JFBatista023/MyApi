import { Role } from "@roles/entities/Role";
import { DataSource } from "typeorm";
import { CreateRolesTable1674397560133 } from "./migrations/1674397560133-CreateRolesTable";
import { CreateUsersTable1674862649254 } from "./migrations/1674862649254-CreateUsersTable";
import { AddRoleIdToUsersTable1674863189664 } from "./migrations/1674863189664-AddRoleIdToUsersTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [
        CreateRolesTable1674397560133,
        CreateUsersTable1674862649254,
        AddRoleIdToUsersTable1674863189664,
    ],
});
