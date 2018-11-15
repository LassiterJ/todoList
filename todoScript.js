window.setTimeout(function () {
    // put all JS code here so HTML can be viewed before alert, prompt, or confirm functions show.

    console.log("Connected");
    // make alert to prompt "What do you want to do?"
    var todos = ["Buy new turtle"];
    var input = prompt("What would you like to do?");
    while (input !== "quit") {
        // handle input 
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addNew();
        } else if (input === "delete") {
            deleteTodo();
        }

        // ask again for new input
        input = prompt("What would you like to do?");
        

    }
    console.log("OK, YOU QUIT THE APP")

    function listTodos() {
        console.log("**********")
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********")
    }
    function addNew() {
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
        console.log(todos)
    }

    function deleteTodo() {
        //ask for index of todo to be deleted
        let index = prompt("what is the index of the todo you want to delete?");
        // delete that todo
        todos.splice(index, 1);
        console.log("Todo Deleted");

    }




}, 500);

