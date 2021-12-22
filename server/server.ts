import express, { Express, Response, Request } from "express"

const app: Express = express()

app.use("/api/select", (_: Request, res: Response) => {
  res.send("HelloWorld")
})

export default app
