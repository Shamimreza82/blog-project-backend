/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { AuthRouter } from './app/module/auth/auth.route'
import globalErrorHandler from './middelware/globalErrorHandler'
import routerErrorHandler from './middelware/routerErrorHandler'
import { BlogRouter } from './app/module/blog/blog.route'


const app = express()
app.use(express.json())


app.use('/api/auth', AuthRouter)
app.use('/api/blogs', BlogRouter)





app.get('/', async (req, res) => {
    res.send({message: "server is running"})
})



app.use(routerErrorHandler)
app.use(globalErrorHandler)


export default app