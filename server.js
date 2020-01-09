const express = require('express');
const hbs = require('hbs');

var port = process.env.PORT || 3000 ;

var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static('public'));

// app.use(express.static(__dirname + '/views/index.html'))

app.get('/',(req,res)=>{
    res.render('index.html')
});


app.listen (port, ()=>{
    console.log(`server is up om port ${port}`);
});