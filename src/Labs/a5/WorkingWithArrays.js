import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
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

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async (id, title) => {
    const response = await axios.get(
      `http://localhost:4000/a5/todos/${id}/title/${title}`
    );
    setTodos(response.data);
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    //fetchTodosPromise();
    fetchTodos();
  }, []); // only happens once (nothing is changing over time)

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Todos from server</h4>

      <input className="form-control" value={todo.id} readOnly />

      <input
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        value={todo.title}
        type="text"
      />

      <textarea
        className="form-control"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />

      <input
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />

      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <br />
      <button className="btn btn-warning" onClick={postTodo}>
        Post Todo
      </button>
      <button className="btn btn-dark" onClick={updateTodo}>
        Update Todo
      </button>
      <button
        className="btn btn-success"
        onClick={() => updateTitle(id, title)}
      >
        Update Todo Title
      </button>
      <button className="btn btn-primary" onClick={createTodo}>
        Create Todo
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>

            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-info float-end"
            >
              Remove
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>

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
