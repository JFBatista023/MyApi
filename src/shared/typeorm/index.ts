import { Role } from "@roles/entities/Role";
import { DataSource } from "typeorm";
import { CreateRolesTable1674397560133 } from "./migrations/1674397560133-CreateRolesTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1674397560133],
});
