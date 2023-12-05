import * as client from "./client.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      {error && <div>{error}</div>}
      <input
        style={{ margin: "8px" }}
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <input
        type={visible ? "text" : "password"}
        placeholder="password"
        style={{ margin: "8px" }}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <button className="btn btn-success" onClick={signin}>
        {" "}
        Signin{" "}
      </button>
    </div>
  );
}
export default Signin;
