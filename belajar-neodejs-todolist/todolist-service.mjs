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
    
    updateTodo(request, response) {
        let body = "";
    
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
    
        request.on("end", () => {
            const parsed = JSON.parse(body);
            if (parsed.id >= 0 && parsed.id < this.todolist.length) {
                this.todolist[parsed.id] = parsed.todo;
            }
    
            response.setHeader("Content-Type", "application/json");
            response.write(this.getJsonTodoList());
            response.end();
        });
    }
    deleteTodo(request, response) {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk.toString();
        });

        request.on("end", () => {
            const parsed = JSON.parse(body);

            if (
                typeof parsed.id !== "number" ||
                parsed.id < 0 ||
                parsed.id >= this.todolist.length
            ) {
                response.statusCode = 400;
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify({
                    code: 400,
                    status: "Bad Request",
                    message: "Field 'id' tidak valid"
                }));
                return;
            }

            // Hapus dengan menghapus elemen pada posisi tersebut
            this.todolist.splice(parsed.id, 1);

            response.setHeader("Content-Type", "application/json");
            response.end(this.getJsonTodoList());
        });
    }
    
}
