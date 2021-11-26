import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import apodRoutes from './routes/apodRoutes.js'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))

dotenv.config()

const dbUrl = process.env.DB_URL;
const PORT = process.env.PORT

//db connection
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => {
    if(PORT == null || PORT == '') PORT = 8000
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => console.log(err));

//redirecting
app.get("/", (req, res, next) => {
    res.redirect('/apod')
})

app.use(apodRoutes)