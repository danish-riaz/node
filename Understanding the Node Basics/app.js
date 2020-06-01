const http = require('http');

// const { route } = require('./routes');
const route = require('./routes');

const server = http.createServer(route.route);

server.listen(3000, () => {
    console.log('Server Running at locathost 3000');
});

