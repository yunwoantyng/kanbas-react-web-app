import * as client from "./client.js";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");
  const findUserById = async (id) => {
    try {
      const user = await client.findUserById(id);
      setAccount(user);
    } catch (err) {
      setError("Please sign in first");
    }
  };
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  if (error) {
    <div className="w-50">
      <h1>Account</h1>
      {error && <div>{error}</div>}
    </div>;
  }
  return (
    <div className="w-50">
      <h1>Account</h1>
      {error && <div>{error}</div>}
      {account && (
        <div>
          <input
            style={{ margin: "8px" }}
            placeholder="password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            style={{ margin: "8px" }}
            placeholder="first name"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            style={{ margin: "8px" }}
            placeholder="last name"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            style={{ margin: "8px" }}
            placeholder="date of birth"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            style={{ margin: "8px" }}
            placeholder="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-secondary" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger" onClick={signout}>
            Signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
