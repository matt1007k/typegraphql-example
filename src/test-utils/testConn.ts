import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "max",
    password: "1234",
    database: "ts-graphqldb",
    synchronize: drop,
    logging: drop,
    entities: ["src/entity/*.*"]
  });
};
