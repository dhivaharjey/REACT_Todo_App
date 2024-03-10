import React, { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoCard from "./Components/TodoCard";
import StatusFilter from "./Components/StatusFilter";

// import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  // useEffect(() => {
  //   let taskArray = localStorage.getItem("TodoList");
  //   // console.log(taskArray);
  //   if (taskArray) {
  //     let todos = JSON.parse(taskArray);
  //     setTodo(todos);
  //   }
  // }, [todo]);
  useEffect(() => {
    filteredTodos();
  }, [todo, filter]);
  const filteredTodos = () => {
    if (filter === "All") {
      setFilterTodos(todo);
    } else if (filter === "Not Completed") {
      setFilterTodos(todo.filter((task) => task.status === "Not Completed"));
    } else if (filter === "Completed") {
      setFilterTodos(todo.filter((task) => task.status === "Completed"));
    }
  };
  console.log("filtered todos", filterTodos);
  const addTodos = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <TodoInput addTodos={addTodos} todo={todo} />
      <StatusFilter filter={filter} setFilter={setFilter} />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
        {filterTodos.map((item, index) => {
          return (
            <TodoCard
              item={item}
              index={index}
              deleteTodo={deleteTodo}
              setTodo={setTodo}
              todo={todo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
