import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoValue === "" || todoValue === " ") {
            return;
        }
        setTodoList([...todoList, todoValue]);
        setTodoValue("" );
};

    const handleDeletTodo = (target) => {
        const result = todoList.filter((item, index) => { return target !== index });
        setTodoList(result);
    };

    return(
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Write your to do..."}
                       onChange={(event) => { setTodoValue(event.target.value) }}
                        value={todoValue}
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                {todoList.map((item, index) => <li key={index}>
                {item}
                <button>❤️ / 🤍</button>

                <button onClick={() => {
                    return handleDeletTodo(index);
                }}>❌</button>
                </li>)}
            </ul>
        </>
    )
}
export default App;
