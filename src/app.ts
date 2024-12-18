import express from 'express'

const app = express()



app.use(express())

app.get('/', async (req, res) => {
    res.send({message: "server is running"})
})



export default app