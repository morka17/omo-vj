const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static('public'));

// app.use(express.static(__dirname + '/views/index.html'))

app.get('/',(req,res)=>{
    res.render('index.html')
});


app.listen(3000,()=>{
    console.log('server is up om port 3000');
});