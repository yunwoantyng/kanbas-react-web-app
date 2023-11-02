import db from "../../Kanbas/Database";
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

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses1, id, screen] = pathname.split("/");
  const course = courses.find((course) => course._id === courseId);
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
