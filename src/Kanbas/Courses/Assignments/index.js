import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { VscNotebook } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <input
        placeholder="Search for Assignment"
        className="input-field"
        style={{ width: 200 }}
      />
      <div className="float-end">
        <button className="btn btn-light">+ Group</button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
          className="btn btn-danger"
        >
          + Assignment
        </Link>
        <button className="btn btn-light">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr style={{ width: 1500, marginTop: 20, marginBottom: 20 }} />
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        <div class="list-group-item list-group-item-secondary">
          <PiDotsSixVerticalBold
            style={{ fontSize: 20, marginRight: 5, marginLeft: 0 }}
          />
          <GoTriangleDown
            style={{ fontSize: 20, marginRight: 10, marginLeft: 0 }}
          />
          <b>ASSIGNMENTS</b>
          <div className="float-end">
            40% of Total <AiOutlinePlus style={{ marginLeft: 5 }} />
            <FaEllipsisVertical style={{ marginLeft: 5 }} />
          </div>
        </div>
        {assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment, index) => (
            <div className="list-group-item">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                style={{ color: "black", textDecoration: "none" }}
                onClick={() => dispatch(setAssignment(assignment))}
              >
                <PiDotsSixVerticalBold
                  style={{ fontSize: 20, marginRight: 8, marginLeft: 0 }}
                />
                <VscNotebook
                  style={{
                    fontSize: 20,
                    marginRight: 12,
                    marginLeft: 0,
                    color: "green",
                  }}
                />
                <b>{assignment.title}</b>
                <div className="float-end">
                  <FaCircleCheck style={{ fontSize: 20, color: "green" }} />
                  <FaEllipsisVertical style={{ marginLeft: 5 }} />
                </div>
              </Link>
              <div style={{ marginLeft: 60, color: "red" }}>
                Multiple Modules
                <button
                  className="btn btn-danger float-end"
                  onClick={() => dispatch(deleteAssignment(assignment._id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Assignments;
