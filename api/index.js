const server = require('./src/app.js');
const port = 3001

server.listen(port, () => {
    console.log(`listening on port: ${port}`);
})