const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8444;

httpServer = http.createServer(app);

httpServer.listen(port, error => {
    if (!error) {
        console.log(
            `*********************************************************************`
        );
        console.log(
            ` App is running at port:${port}`
        );
    }
})
