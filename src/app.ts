import express from 'express'
import { AuthRouter } from './app/module/auth/auth.route'

const app = express()



app.use(express())

app.use('/api/auth', AuthRouter)





app.get('/', async (req, res) => {
    res.send({message: "server is running"})
})



export default app