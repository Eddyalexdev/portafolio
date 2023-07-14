import {Router} from 'express'
import { postMessage } from '../controller/contact.controller'

const router = Router()

router.post('/send', postMessage)

export {router}
