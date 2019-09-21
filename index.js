const express = require('express')
const app = express()
const port=3000
const handleRoute = function(req,res)
{
res.send('Hello World!')
}

/*
app.get('/',function(req,res)
{
res.send('Hello World!')
})
*/

app.get('/',handleRoute)

app.get('/another-route',function(req,res)
{
res.send('Hello to another route')
})

app.listen(port,function()
{console.log(`Example app listening on port ${port}!`)})