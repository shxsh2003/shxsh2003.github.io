function main() {

    const txtTodoItem = document.getElementById("txtTodoItem")
    const btnAddTask = document.getElementById("btnAddTask")
    const lstTodos = document.getElementById("lstTodos")
    
    let todos = []
    
    function display() 
    {
        let todoItems = ""
        for(let i=0; i<todos.length; i++)
            {
                console.log(todos[i])
                todoItems += "<li>" + todos[i] + "</li>"
            }
            lstTodos.innerHTML = todoItems
    }
    
    btnAddTask.addEventListener('click', ()  => {
        //logic
        console.log(txtTodoItem.value)
        todos.push(txtTodoItem.value)
        console.log(todos)
        display()
        
    })
    }
    main();
    
    // todos.push("Task 1")
    // todos.push("Task 2")
    // todos.push("Task 3")
    
    // console.log(todos)
    // console.log(todos.length)   
    // console.log(todos[0])
    // console.log(todos[todos.length-1])
    // let index = 2
    // console.log(todos[index])