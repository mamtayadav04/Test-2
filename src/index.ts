import { Server } from "./server"
const server = new Server().app
const port = 3000
server.listen(port,()=>{
    console.log(`server is connected at port ${port}`)
})