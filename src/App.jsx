import { useState } from "react";
import { useRef } from "react";

function App() {
  //hooks kuch nahi 
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    todo.push(userInput.current.value);
    setTodo([...todo])
    console.log(todo);
    userInput.current.value = ''
  }

  const deleteTodo = (index) => {
    todo.splice(index , 1);
    setTodo([...todo])
  }
  const editTodo = (index) => {
    const updatedValue = prompt('Enter updated value', todo[index]);
    if (updatedValue !== null && updatedValue.trim() !== "") {
      todo[index] = updatedValue;
      setTodo([...todo]);
    }
  };
  return (
    <>
    <div className=" min-h-screen text-center	font-mono	 bg-teal-100">
      <h1 className="	py-8	font-extrabold	text-6xl	">Todo App</h1>
      <input className="py-1 pr-6 pl-2 border-solid border-2 border-black		" type="text" placeholder="Enter todo" ref={userInput} />
      <button className="bg-sky-600	text-stone-50	px-1	py-1	ml-3.5" onClick={addTodo}>AddTodo</button>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
            <button className="bg-red-600 text-stone-50	px-1 py-1	ml-3.5 mt-6 " onClick={() => deleteTodo(index)}>Delete</button>
            <button className="bg-green-600	text-stone-50 px-2.5 py-1	ml-3.5 mt-6" onClick={()=>editTodo(index)}>Edit</button>
          </li>
        })}
      </ul>
      </div>
    </>
  )
}

export default App