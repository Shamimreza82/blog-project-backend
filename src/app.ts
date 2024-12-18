/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express'
import { AuthRouter } from './app/module/auth/auth.route'
import { json } from 'stream/consumers'

const app = express()



app.use(express.json())

app.use('/api/auth', AuthRouter)





app.get('/', async (req, res) => {
    res.send({message: "server is running"})
})




app.use((err: any, req: Request, res: Response, next: NextFunction)=>{
    console.log(err);

    res.status(500).json({
        success: false, 
        message: err.message || "something wants wrong", 
        error: err
    })
})


export default app