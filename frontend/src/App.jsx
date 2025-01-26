import { useState } from "react";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import TotalCompletedItem from "./components/TotalCompletedItem";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>My To Do List</h1>
            <AddItem />
            <TodoList />
            <TotalCompletedItem />
        </div>
    );
}

export default App;
