import React, { useState } from "react";

const AddItem = () => {
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Name</label>
            <input
                type="text"
                className=""
                placeholder="Add To Do"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="">
                Submit
            </button>
        </form>
    );
};

export default AddItem;
