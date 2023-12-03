import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import { Routes, Route } from "react-router-dom";

function Project() {
  return (
    <div>
      <h1>Project</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Project;
