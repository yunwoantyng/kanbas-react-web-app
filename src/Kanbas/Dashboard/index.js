import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <br />
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <br />

      <button className="btn btn-success" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse}>
        Update
      </button>
      <br />

      <br />
      <div className="wd-dashboard-grid row  row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div className="card h-100">
            <img src="/images/blue.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                <h5 className="card-title">{course.name}</h5>
                <div className="float-end">
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </Link>
              <p className="card-text">
                <small className="text-muted">
                  Class No. {course.number}
                  <br />
                  {course.startDate} - {course.endDate}
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
