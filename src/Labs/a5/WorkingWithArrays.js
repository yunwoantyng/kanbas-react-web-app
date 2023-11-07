import React, { useState } from "react";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  return (
    <div>
      <h3>Working with Arrays</h3>
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
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`http://localhost:4000/a5/todos/${id}`}
        className="btn btn-primary me-2"
      >
        Fetch Todo {id}
      </a>
    </div>
  );
}
export default WorkingWithArrays;
