import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "adanilishin",
  password: "password",
  database: "taskmanaggment",
  entities: [__dirname + "/../**/*.entity.ts"],
  synchronize: true
};
