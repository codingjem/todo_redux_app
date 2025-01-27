import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = [
        { id: 1, title: "Wash Dishes", completed: false },
        { id: 2, title: "Pick Up Parcel", completed: false },
        { id: 3, title: "Finish Website Design", completed: false },
        { id: 4, title: "Prep for Interview", completed: false },
        { id: 5, title: "Feed the goats", completed: false },
    ];

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ))}
        </ul>
    );
};

export default TodoList;
