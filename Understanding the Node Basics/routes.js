const fs = require('fs');

const routeHandler = (req, res) => {
    // console.log(req);
    // console.log(req.headers, req.method, req.url);
    // process.exit();
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>')
        res.write('<h1>I\'m at home route !</h1>');
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="msg"/><br/><br/><button>Send Message</button>')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/thanks');
            return res.end();
        })

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>')
    res.write('<p>Thanks ! for contacting us you will be soon informed.</p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}


// module.exports = routeHandler;

// module.exports = {
//     route: routeHandler,
// }

exports.route = routeHandler;
// exports.someText = 'SomeText key called';
