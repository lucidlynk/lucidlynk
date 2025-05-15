export class TodolistService {
    todolist = ["programmmer", "zaman", "Now"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                };
            })
        });
    }

    getTodoList(request, response) {
        const json = this.getJsonTodoList();
        response.setHeader("Content-Type", "application/json");
        response.write(json);
        response.end();
    }

    createTodo(request, response) {
        let body = "";
    
        request.on("data", (chunk) => {
            body += chunk.toString(); // kumpulkan data
        });
    
        request.on("end", () => {
            const parsed = JSON.parse(body); // parsing setelah semua data masuk
            this.todolist.push(parsed.todo);
    
            response.setHeader("Content-Type", "application/json");
            response.write(this.getJsonTodoList());
            response.end();
        });
    }
    
}
