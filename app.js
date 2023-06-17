const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const con = 'This is a usefull content on this page'
    const params = {'title': 'Stop and Go... ',"content":con}
    res.status(200).render('index.pug',params);
})
    
app.listen(port,()=>{
    console.log(`This port is started succesfully on port ${port}`)
})  