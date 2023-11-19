import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todos, setTodos] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const fetchTodosPromise = () => {
    const promise = axios.get("http://localhost:4000/a5/todos");
    promise.then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const createTodo = async () => {
    const response = await axios.get("http://localhost:4000/a5/todos/create");
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post("http://localhost:4000/a5/todos", {
      title: title,
    });
    setTodos(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    console.log(response.data);
    setTodos(response.data);
  };

  const removeTodo = async (id) => {
    const response = await axios.get(
      `http://localhost:4000/a5/todos/${id}/delete`
    );
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete(`http://localhost:4000/a5/todos/${id}`);
    setTodos(response.data);
  };

  const updateTitle = async (id, title) => {
    const response = await axios.get(
      `http://localhost:4000/a5/todos/${id}/title/${title}`
    );
    setTodos(response.data);
  };

  useEffect(() => {
    //fetchTodosPromise();
    fetchTodos();
  }, []); // only happens once (nothing is changing over time)

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Todos from server</h4>
      <button
        className="btn btn-primary"
        onClick={() => updateTitle(id, title)}
      >
        Update Todo Title
      </button>
      <button className="btn btn-primary" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-primary" onClick={postTodo}>
        Post Todo
      </button>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h4>Update Item Title</h4>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <a
        href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
        className="btn btn-primary me-2"
      >
        Update Todo Title
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get All Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodos({ ...todos, id: e.target.value })}
      />
      <a href={`${API}/${todos.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
      <input
        value={todos.id}
        onChange={(e) =>
          setTodos({
            ...todos,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todos.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todos.id}
      </a>
    </div>
  );
}
export default WorkingWithArrays;
