import { ConnectionOptions } from "typeorm"
import dotenv from "dotenv"

const isProduction = process.env.NODE_ENV === "production"

if (!isProduction) {
  dotenv.config()
}

const sslOption = isProduction
  ? {
      ssl: true,
      extra: {
        ssl: {
          rejectunauthorized: false,
        },
      },
    }
  : {}

const port = Number(process.env.DB_PORT) || 5432

export const option: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //以下に各entityを追加する
  entities: [__dirname + "/entity/*.js"],
  synchronize: false,
  logging: false,
  ...sslOption,
}
