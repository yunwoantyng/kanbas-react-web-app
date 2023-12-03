import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";

import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import { React } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./users/signin";
import Account from "./users/account";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/users/signin" element={<Signin />} />
            <Route path="/users/account" element={<Account />} />

            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
