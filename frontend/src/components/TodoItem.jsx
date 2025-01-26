import React from "react";

const TodoItem = ({ id, title, completed }) => {
    return (
        <li>
            <div>
                <span>
                    <input type="checkbox" className="" checked={completed} />
                    {title}
                </span>
                <button className="">Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
