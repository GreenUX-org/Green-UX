import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app= express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`running on port http://localhost:${PORT}`)
})


export default app