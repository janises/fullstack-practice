const { message } = require('./message.json')
let newMessages=Object.assign({}, {message})

module.exports={
    getMessage: (req, res, next)=>{
        res.status(200).send(message)
    },
    updateMessage: (req, res, next)=>{
        newMessages.message=req.body.update
        res.status(200).send(newMessages)
    }
}