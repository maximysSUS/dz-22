const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const PORT = 3001

const app = express()

const createPath = (page, ext) =>
   path.resolve(__dirname, 'pages', `${page}.${ext}`)

// ‘middleware
app.use(express.static(__dirname + '/pages'))

// порты

app.get('/page1', (req, res) => {
   res.sendFile(createPath('html1', 'html'))
})

app.get('/page2', (req, res) => {
   res.sendFile(createPath('html2', 'html'))

})

app.use((req, res) => {
   res.sendFile(createPath('error', 'html'))
})

app.listen(PORT, () => {
   try {
      console.log('server is running on port:', PORT)
   } catch (err) {
      console.error('error on run server', err)
   }
})