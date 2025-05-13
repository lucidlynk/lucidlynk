import http from "http";

const server = http.createServer((request, response) => {
    response.write("Todolist API");
    response.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
