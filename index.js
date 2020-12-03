const express = require('express')
const app = express()
 
app.get('/maher', function (req, res) {
  res.send("[{'name':'maher','lname':'memo','ss':'123'}]")
})
 
app.listen(3000)