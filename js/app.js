const express = require('express');    
const cors = require('cors');    
const app = express();    
  
// 添加CORS中间件  
app.use(cors({    
  origin: 'https://xbpd.ganzhe.site',    
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',    
  credentials: true, // if you support cookies, sessions etc.    
}));  