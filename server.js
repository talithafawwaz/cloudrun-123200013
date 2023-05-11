const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello ini branch dev')
  })
  .listen(PORT, () => console.log('Listening on', PORT))