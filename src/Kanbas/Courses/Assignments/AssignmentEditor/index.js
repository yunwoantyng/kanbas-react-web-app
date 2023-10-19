import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {FaEllipsisVertical} from "react-icons/fa6";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container" style={{marginLeft:5}}>
    <div className="row">
      <div className="col">
        <div className="float-end">
          <div>
            <BsFillCheckCircleFill style={{fontSize: 20, color: "green"}}/>
            <span style={{color:"green"}}>Published</span>
            <button className="btn btn-light">
              <FaEllipsisVertical style={{fontSize: 20}}/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className="row">
      <h2>Assignment Name</h2>
      </div>
      <div className="row">
      <input value={assignment.title}
             className="form-control mb-2" />
      </div>
      <hr/>
      <div className="row">
        <div className="col">
          <div className="float-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button> </div></div>
    </div>
    </div>
  );
}


export default AssignmentEditor;