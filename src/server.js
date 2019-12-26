const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.get('/helloPage/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/helloPage.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.get('/imagePage/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/imagePage.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.listen(3000, function() {
  console.log('Application is running on http://localhost:3000')
})