import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: "ester",
  password: "62442",
  database: "exercicio_typeorm",

  // o synchronize, é uma flag que indica se a database precisa ser
  // recriada a cada vez que o servidor entra em execução. Seu uso
  // em um ambiente de produção não é recomendado. Pode ser uma
  // ferramenta útil para desenvolvimento e debug,

  // Se deixarmos true, e fizermos alguma mudanca nas tabelas do banco
  // toda vez que o servidor for executado ele identificará essas
  // mudanças e fará a recriação da database para aplicar as
  // alterações.

  synchronize: false,
  logging: true,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  export default AppDataSource
