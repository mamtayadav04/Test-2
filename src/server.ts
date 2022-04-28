import express from 'express'
import mongoose from 'mongoose'
import { env } from './Environments/env'
import Routes from './Router/Routes'
export class Server {
    public app: express.Application = express()

    constructor() {
        this.setMongodb(),
            this.setBodyParser(),
            this.setRoutes(),
            this.error404Handler(),
            this.handleError()
    }

    setMongodb() {
        const dataurl = env().db_url
        mongoose.connect(dataurl).then(() => {
            console.log('Database Connected')
        })
    }

    setBodyParser() {
        this.app.use(express.urlencoded({ extended: true })),
        this.app.use(express.json())
    }

    setRoutes() {
        this.app.use('/api',Routes)
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json
                ({
                    message: "ERROR FOUND",
                    status_code: 404
                });
        });
    }

    handleError() {
        this.app.use((error:any, req:any, res:any, next:any) => {
            const errorStatus = req.errorStatus || 500
            res.status(500).json({
                message: error.message || "Something Went Wrong , Please Try Again",
                status_code: 500
            });
        });
    }
}