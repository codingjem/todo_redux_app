import React, { useState } from "react";
import "./AddItem.css";

const AddItem = () => {
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className=""
                placeholder="Add your new to do"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="">
                +
            </button>
        </form>
    );
};

export default AddItem;
