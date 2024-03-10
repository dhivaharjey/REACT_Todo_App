import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const TodoCard = ({ item, index, deleteTodo, todo, setTodo }) => {
  const [editing, setEditing] = useState(false);
  const [todoStatus, setTodoStatus] = useState(item.status);

  useEffect(() => {
    setTodoStatus(todoStatus);
  }, [todoStatus]);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editDesc, setEditDesc] = useState(item.description);

  const handleStatusChange = (newStatus, id) => {
    setTodoStatus(newStatus);

    updateStatus(newStatus, id);
  };
  const updateStatus = (newStatus, id) => {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: newStatus,
        };
      }
      return task;
    });
    setTodo(updatedTodo);
  };

  const editdedTodo = (id) => {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: editTitle,
          description: editDesc,
          status: todoStatus,
        };
      }
      return task;
    });
    setTodo(updatedTodo);
  };

  const handleUpdate = (id) => {
    setEditing(false);
    editdedTodo(id);
  };

  const handleEdit = (id) => {
    setEditing(true);
  };

  return (
    <div className="col " key={item.id}>
      <div className="card  bg-success-subtle d-flex">
        <div className="card-body  ">
          {editing ? (
            <>
              <div className=" d-flex mb-2 align-items-center">
                <p className="card-text mx-2">
                  <strong>Title :</strong>
                </p>
                <input
                  className="col-8 border border-warning-subtle "
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  required
                />
              </div>
              <div className=" d-flex align-items-center">
                <p className="card-text mx-2">
                  <strong>Description :</strong>
                </p>
                <input
                  className="col-8  border border-warning-subtle"
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <p className="card-text   ">
                <strong>Title :</strong>

                {item.title}
              </p>

              <p className="card-text">
                <strong>Description :</strong>
                {item.description}
              </p>
            </>
          )}
        </div>

        {/* Drop Down  */}
        <div className="mx-3">
          <Dropdown
            onSelect={(selectedOption) =>
              handleStatusChange(selectedOption, item.id)
            }
            className="d-flex"
          >
            <strong>Status : </strong>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className={
                item.status === "Not Completed"
                  ? "bg-danger ms-2 px-3 py-1 text-white fw-bold"
                  : "bg-success ms-2 px-3 py-1 text-white fw-bold"
              }
            >
              {item.status} {/* Drop Down status toggle */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                eventKey={
                  todoStatus === "Not Completed" ? "Completed" : "Not Completed"
                }
              >
                {todoStatus === "Not Completed" ? "Completed" : "Not Completed"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className=" card-footer mt-5  ">
          <div className=" d-flex justify-content-end mt-2">
            <button
              type="submit"
              className="btn btn-success mx-3  mb-sm-2"
              onClick={
                editing
                  ? (e) => {
                      handleUpdate(item.id);
                    }
                  : () => {
                      handleEdit(item.id);
                    }
              }
            >
              <i class="bi bi-pencil me-2"></i>
              {editing ? "Update " : "Edit"}
            </button>
            <button
              className="btn btn-danger mb-sm-2 "
              onClick={() => deleteTodo(item.id)}
            >
              <i class="bi bi-trash3 me-2"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
