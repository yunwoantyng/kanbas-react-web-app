import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const { assignment } = useSelector((state) => state.assignmentsReducer);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container" style={{ marginLeft: 5 }}>
      <div className="row">
        <div className="col">
          <div className="float-end">
            <div>
              <BsFillCheckCircleFill style={{ fontSize: 20, color: "green" }} />
              <span style={{ color: "green" }}>Published</span>
              <button className="btn btn-light">
                <FaEllipsisVertical style={{ fontSize: 20 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h4>Assignment Name</h4>
      </div>
      <div className="row">
        <input value={assignment.title} className="form-control mb-2" />
      </div>
      <div className="row">
        <input
          value={assignment.description}
          className="form-control"
          style={{ height: 150 }}
        />
      </div>
      <div className="row" style={{ margin: 10 }}>
        <div className="col-2"></div>
        <div className="col-1" style={{ fontWeight: "bold" }}>
          Points
        </div>
        <div className="col">
          <input value="100" type="number" className="form-control" />
        </div>
      </div>
      <div className="row" style={{ margin: 10 }}>
        <div className="col-2"></div>
        <div className="col-1" style={{ fontWeight: "bold" }}>
          Assign
        </div>
        <div className="col">
          <div className="row" style={{ fontWeight: "bold" }}>
            Due
          </div>
          <div className="row">
            <input type="date" className="form-control" />
          </div>
          <div className="row" style={{ fontWeight: "bold" }}>
            <div className="col">Available from</div>
            <div className="col">Until</div>
          </div>
          <div className="row" style={{ fontWeight: "bold" }}>
            <div className="col">
              <input type="date" className="form-control" />
            </div>
            <div className="col">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="float-end">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger"
            >
              Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button
                className="btn btn-success"
                onClick={() => {
                  dispatch(addAssignment({ ...assignment, course: courseId }));
                }}
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
