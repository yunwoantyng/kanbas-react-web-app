import Home from "./home";

import Signin from "./users/signin.js";
import Signup from "./users/signup";
import Account from "./users/account.js";
//import Admin from "./users/admin";
import UserTable from "./users/table.js";

import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Search from "./search.js";

function Project() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <h1>CS5610-A6</h1>
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
