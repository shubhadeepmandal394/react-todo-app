import React from "react";

//Import Components
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, filteredTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;