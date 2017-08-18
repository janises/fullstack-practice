const { message } = require('./message.json')

module.exports={
    getMessage: (req, res, next)=>{
        res.status(200).send(message)
    }
}