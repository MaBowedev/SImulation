import axios from "axios"

class Controller{
    static async renderPage(req , resp){
        const obj = await axios.get('http://localhost:3050/messages')
        resp.render('pages/home', {messages:obj.data})
    }
    static async sendMessage(req,res){
        const msg = req.body
        console.log(msg);
        const respObj = await axios.post('http://localhost:3050/messages', {...msg, date: new Date()})
         res.redirect(`/home`)
       
        }
}

export default Controller