import React, { useState } from "react";

const TodoInput = ({ addTodos, todo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoTitle || !todoDesc) {
      window.alert("Please fill out all fields");
    } else {
      let newTodo = {
        id: todo.length + 1,
        title: todoTitle,
        description: todoDesc,
        status: "Not Completed",
      };
      addTodos(newTodo);
      setTodoDesc("");
      setTodoTitle("");
    }
  };

  return (
    <>
      <h1 className="text-center mt-3 text-success">My Todo</h1>
      <div className="row  px-0 mb-3 m-5  ">
        <div className=" col-sm-12 col-lg-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Title"
            aria-label="Todo Title"
            name="todoTitle"
            required
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <div className=" col-sm-12 col-lg-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Description"
            aria-label="Todo Description"
            name="todoDetail"
            required
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-lg-3">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-success col-12 col-lg-8 "
          >
            Add Todo
          </button>
        </div>
      </div>
      {/* <h1 className="mt-5">My Todo List</h1> */}
    </>
  );
};

export default TodoInput;
