import express, { Express, Response, Request } from "express"
import path from "path"
import { useExpressServer, Action } from "routing-controllers"
import * as authorization from "./authorization/authorization"
import { createConnection } from "typeorm"
import { option } from "./db/option"

let app = async () => {
  const app: Express = express()

  await createConnection(option).catch((err) => {
    console.log(err)
    throw Error(err)
  })

  useExpressServer(app, {
    cors: true,
    routePrefix: "/api/v1",
    authorizationChecker: authorization.authorizationCheck,
    currentUserChecker: authorization.currentUserCheck,
    controllers: [path.join(__dirname + "/controllers/*.js")],
    validation: true,
    development: false,
  })

  //クライアント
  app.use(express.static(path.join(__dirname, "../client")))
  app.get("*", function (_, res) {
    res.sendFile(path.resolve(__dirname, "../client/index.html"))
  })

  app.listen(3000, () => console.log("Example app listening on port 3000!"))
}

export default app()
