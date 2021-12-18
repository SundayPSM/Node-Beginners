const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to Node JS');
        res.end()
    }
    else if (req.url === '/about') {
        res.write('This is a short history about us .......!');
        res.end()
    } else {
        res.write(
            `
            <h1>Oops!</h1>
            <p>We can't find the page which you are looking for..!</p>
            <p>Sorry</p>
            <a href='/'>back home</a>
            `
        );
        res.end()
    }
});

server.listen(5000)