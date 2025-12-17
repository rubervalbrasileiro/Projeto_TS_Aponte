import "reflect-metadata"
import { DataSource } from "typeorm"
import { Aluno } from "./models/Aluno"
import { Curso } from "./models/Curso"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: “ruberva75",
  database: "meubanco",
  synchronize: true, 
  logging: false,
  entities: [Aluno, Curso],
})
