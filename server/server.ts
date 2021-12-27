import express, { Express, Response, Request } from "express"
import path from "path";
import { useExpressServer } from "routing-controllers";
import { createConnection } from "typeorm";
import { option } from "./db/option";

let app = async() => {
  const app: Express = express()

  const connection = await createConnection(option).catch(err=>{
    console.log(err)
    throw Error(err)})

  app.use("/api/select", (_: Request, res: Response) => {
    res.send("HelloWorld")
  })

  useExpressServer(app,{
    routePrefix:"/api/v1",
    controllers: [path.join(__dirname + "/controllers/*.js")],
    development: false,
  })

  app.listen(3000, () => console.log('Example app listening on port 3000!'))

}

export default app()
