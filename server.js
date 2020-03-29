const express = require('express')
const path = require('path')

const PORT = 80

// initialize node express
const app = express()

// return files
app.use(express.static(`${__dirname}/build`))

// return index for all the other routes (which are used and
// processed in react router in the app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
