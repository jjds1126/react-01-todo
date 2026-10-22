import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        // 함수에서 if문을 쓸 때는 된다 / 안된다를 판별하는 과정임
        // 초보분드르이 생각 흐름은 해야되는 일을 중심으로 if의 조건을 구성하게 됨
        // 아래 코드는 input 의 입력값이 "" 이 아닐 떄에만 저장을 해달라고 해야지~
        //if (todoValue !== "") {
        //    setTodoList([...todoList, todoValue]);
        //    setTodoValue("");
        //}

        // if 문을 통해 된다 / 안된다를 판별할 떄에는 안될 떄를 탈락 시키는 코드 구성을 가져야 함
        // YES 를 진행하는 과정으로 코드를 진행해야 함
        if (todoValue === "") {
            return;
        }
        setTodoList([...todoList, todoValue]);
        setTodoValue("" || todoValue === " ");
};

    return(
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Write your to do..."}
                       onChange={(event) => { setTodoValue(event.target.value) }}
                       /*
                        input의 value라는 속성이 사용자가 입력하는 값이 존재하게 되는 속성임
                         평상시엔 이 아랫줄이 동작을 안 하다가, handleSubmit의 serTodoValue를 통해
                         todoValue의 값이 ""으로 변하는 순간 리액트는 아랫줄에 ""을 집어넣음
                         */
                        value={todoValue}
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                {/*
                     return 안에서 {} 를 통해 map()을 사용할 떄에는
                     반복되는 요소가 출력되기 떄문에 그걸 리액트가 구분할 수 있도록
                     key(중복되지않는 값) 를 리턴되는 최상위 요소에게 붙여줘야 함
                     (인식표 개념)
                */}
                {todoList.map((item => <li>{item}</li>)}
            </ul>
        </>
    )
}
export default App;
