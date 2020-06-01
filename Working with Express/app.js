const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Inside first Middleware !');
    // res.send('<h1>Inside first Middleware !</h1>');
    // return res.end();
    next(); // for jumping into the next middleware
});

app.use((req, res, next) => {
    console.log('Inside second Middleware !');
    // Content-Type will be set by express (will auto detect type)
    // offcourse we can always overwrite.
    res.send('<h1>Hello From Express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('Server Running at locathost 3000');
// });

// The above code is packed in a single express funciton
app.listen(3000, () => {
    console.log('Server Running at locathost 3000');
})

