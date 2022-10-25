const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
})

server.listen(3000, () => console.log("App running on port 3000"))