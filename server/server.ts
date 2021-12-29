import express, { Express, Response, Request } from "express"
import path from "path"
import { useExpressServer, Action } from "routing-controllers"
import * as authorization from "./authorization/authorization"
import { createConnection } from "typeorm"
import { option } from "./db/option"

const port = process.env.PORT || 5000
let app = async () => {
  const app: Express = express()

  await createConnection(option).catch((err) => {
    console.log(err)
    throw Error(err)
  })

  useExpressServer(app, {
    routePrefix: "/api/v1",
    authorizationChecker: authorization.authorizationCheck,
    currentUserChecker: authorization.currentUserCheck,
    controllers: [path.join(__dirname + "/controllers/*.js")],
    validation: true,
    development: false,
  })

  //クライアント
  app.use(express.static(path.join(__dirname, "../public")))
  app.get("*", function (_, res) {
    res.sendFile(path.resolve(__dirname, "../public/index.html"))
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

export default app()
