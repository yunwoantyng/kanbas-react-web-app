import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { GoTriangleDown } from "react-icons/go";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row" style={{ marginBottom: 10 }}>
          <div className="col-8">
            <input
              className="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <textarea
              className="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>
              <PiDotsSixVerticalBold
                style={{ fontSize: 20, marginRight: 5, marginLeft: 0 }}
              />
              <GoTriangleDown
                style={{ fontSize: 20, marginRight: 10, marginLeft: 0 }}
              />
              {module.name}
              <div className="float-end">
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <FaCircleCheck
                  style={{ fontSize: 20, color: "green", marginLeft: 5 }}
                />
                <AiOutlinePlus style={{ marginLeft: 5 }} />
                <FaEllipsisVertical style={{ marginLeft: 5 }} />
              </div>
            </h3>
            <p>{module.description}</p>

            <li className="list-group-item">{module.lesson_1}</li>
            <li className="list-group-item">{module.lesson_2}</li>
            <li className="list-group-item">{module.lesson_3}</li>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
