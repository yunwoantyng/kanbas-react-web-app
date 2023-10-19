import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileImport} from "react-icons/fa";
import {FaFileExport} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";
import {ImFilter} from "react-icons/im";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="container-fluid">
      <h1>Grades</h1>
      <div class="col">
          <div class="row">
            <div class="container-fluid dropdown">
              <div class="float-end">
                <button style={{padding:5}}><FaFileImport style={{marginRight:7}}/>Import</button> 
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaFileExport style={{marginRight:3}}/> Export</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                 <button><FaGear/></button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
              <div class="col-6">
                <b>Student Names</b>
                <div class="form-group">
                  <select class="form-control">
                    <option selected>Search Students</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <b>Assignment Names</b>
                <div class="form-group">
                  <select class="form-control">
                    <option selected>Search Assignments</option>
                    <option>...</option>
                  </select>
                </div>
              </div> 
          </div>
          <br/>
          <div class="row">
            <div class="col-5">
            <button><ImFilter style={{marginRight:3}}/>Apply Filters</button>
           </div>
          </div>

     <br/>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
        </tbody></table>
    </div></div>);
}
export default Grades;