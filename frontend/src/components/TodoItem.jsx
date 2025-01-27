import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, title, completed }) => {
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox" className="" />
                {title}
            </span>
            <button className="todo-delete">-</button>
        </li>
    );
};

export default TodoItem;
