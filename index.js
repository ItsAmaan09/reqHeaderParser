const express = require('express');

var app = express();

app.use(express.json());

app.get('/api/whoami',(req,res)=>{
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.json({ipaddress:ipaddress,language:language,software:software})
});

app.listen(3000,()=>{
    console.log('Server is running...')
});