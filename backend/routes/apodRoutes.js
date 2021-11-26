import express from 'express'
const router = express.Router()
import getApod from '../controllers/apodController.js'

router.get('/apod/:date', getApod)

export default router