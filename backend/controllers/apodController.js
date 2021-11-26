import Apod from '../model/apodModel.js'
import axios from 'axios'
import download from 'image-downloader'

const getApod = async(req, res, next) => {
    console.log({params: req.params.date});
    let date = req.params.date
    try {
        const resApod = await Apod.findOne({date}).exec()
        console.log({resApod});
        if(!resApod) {
          try {
              const apiRes = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
              const createApod = new Apod(apiRes.data)
              await createApod.save()
              console.log({createApod});
              const downloadImage = (url, filepath) => {
                return download.image({
                    url,
                    dest: filepath 
                });
              }
              downloadImage(createApod.url, './images')
              res.status(201).json(createApod)
          } catch (error) {
              console.log({error});
          }
        } else if(resApod) res.status(200).json(resApod)
    } catch (error) {
        console.log({error});
    }
}

export default getApod