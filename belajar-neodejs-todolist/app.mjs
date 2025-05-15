import http from "http";
import {TodolistService} from "./todolist-service.mjs";

const service =new TodolistService();
const server = http.createServer((request, response) => {
    if(request.method == "GET"){
        service.getTodoList(request,response);
    } else if (request.method == "POST") {
        service.createTodo(request,response);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
