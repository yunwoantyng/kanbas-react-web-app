import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  //const API_BASE = process.env.REACT_APP_API_BASE;
  //const COURSES_URL = `${API_BASE}/courses`;
  const COURSES_URL =
    "https://kanbas-node-server-app-yun.onrender.com/api/courses";

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const [empty, kanbas, courses1, id, screen] = pathname.split("/");
  //const course = courses.find((course) => course._id === courseId);
  return (
    <div className="container">
      <h2>
        <FaBars style={{ color: "red", marginLeft: 20, marginRight: 50 }} />
        Course {course.name} / {screen}
      </h2>
      <hr style={{ width: 1500, marginBottom: 15 }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

//<h2><FaBars style={{color: "red", marginLeft: 20, marginRight: 50}}/>Course {course.name} / {screen}</h2>
