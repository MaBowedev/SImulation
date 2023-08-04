import  express  from "express";
import Controller from "../controller/controller.js";

const router = express.Router()


router.get('/home', (req, resp)=> Controller.renderPage(req, resp))
router.post('/send', Controller.sendMessage)


export default router
