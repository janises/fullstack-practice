const express = require('express'),
      bodyParser = require('body-parser'),
      cors=require('cors'),
      { port } = require('./server/config.json'),
      msgCtrl = require('./server/msgCtrl'),
      app=express()

app.use(bodyParser.json())
app.use(cors())

//ENPOINT
app.get('/api/message', msgCtrl.getMessage)

app.listen(port, _=>{console.log('(I)...(I) '+port)})
