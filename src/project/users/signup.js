import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client.js";

function Signup() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError("Username already taken");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        style={{ margin: "8px" }}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        type={visible ? "text" : "password"}
        style={{ margin: "8px" }}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <button className="btn btn-warning" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;
