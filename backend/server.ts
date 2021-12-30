import * as jsonServer from 'json-server'
import * as fs from 'fs'
import * as https from 'https'
import { environment as env } from "../src/environments/environment"
import { handleAuthentication } from './auth'
// import { Request, Response} from 'express'

const server = jsonServer.create()
const router = jsonServer.router('./backend/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication)

// Use default router
server.use(router)
 
const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(env.apiPort, ()=> {
  console.log(`JSON Server is runnig on: https://${env.apiAddress}:${env.apiPort}`);
})
