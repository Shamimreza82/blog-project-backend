/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { AuthRouter } from './app/module/auth/auth.route'
import globalErrorHandler from './middelware/globalErrorHandler'
import routerErrorHandler from './middelware/routerErrorHandler'



const app = express()
app.use(express.json())


app.use('/api/auth', AuthRouter)





app.get('/', async (req, res) => {
    res.send({message: "server is running"})
})



app.use(routerErrorHandler)
app.use(globalErrorHandler)


export default app