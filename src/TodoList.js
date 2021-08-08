import React, { useState } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

/** This component renders all of the Todo components along with the NewTodoForm 
 * component.
 */
function TodoList() {
    const [todos, setTodos] = useState([]);

    const remove = id => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                setTodos(todos => [...todos.slice(0,i),...todos.slice(i+1,todos.length + 1)]);
            }
        }
    };

    const updateTodoList = formData => {
        setTodos(todos => [...todos, formData])
    }

    let displayTodos = []
    for (let i = 0; i < todos.length; i++) {
        displayTodos.push(
            <Todo 
                key={todos[i].id}
                id={todos[i].id}
                text={todos[i].formData.todoText}
                handleRemove={remove}
            />
        )
    }

    return (
        <div className="TodoList">
            {displayTodos}
            <NewTodoForm addTodo={updateTodoList}/>
        </div>
    )
}

export default TodoList;