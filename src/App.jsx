import {useState} from "react";
import styles from "./App.module.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoValue === "" || todoValue === " ") {
            return;
        }
        setTodoList([...todoList, todoValue]);
        setTodoValue("");
    };

    const handleDeletTodo = (target) => {
        const result = todoList.filter((item, index) => {
            return target !== index
        });
        setTodoList(result);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My ToDo ({todoList.length})</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type={"text"}
                    placeholder={"Write your to do..."}
                    onChange={(event) => {
                        setTodoValue(event.target.value)
                    }}
                    value={todoValue}
                />
                <button type="submit" className={styles.submitButton}>Add To Do</button>
            </form>
            <hr className={styles.divider} />
            <ul className={styles.list}>
                {todoList.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        <span className={`${styles.text} ${item.completed ? styles.completed : ""}`}></span>
                    {item.text}
                    <button
                        className={styles.actuonButton}
                    onClick={() => {
                        handleToggleTodo(index);
                    }}>
                        {item.completed ? "❤️" : "🤍"}
                    </button>
                    <button
                        className={styles.actuonButton}
                        onClick={() => {
                        return handleDeletTodo(index);
                    }}>
                        ❌
                    </button>
                </li>)}
            </ul>
        </div>
    )
}

export default App;
