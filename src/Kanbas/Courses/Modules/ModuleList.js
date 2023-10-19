import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {GoTriangleDown} from "react-icons/go";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisVertical} from "react-icons/fa6";
import {FaCircleCheck} from "react-icons/fa6";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const lessons = modules
  return (
    <>
    <ul className="list-group">
    <>
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <>
           <li key={index} className="list-group-item list-group-item-secondary">
             <h4>
             <PiDotsSixVerticalBold style={{fontSize: 20, marginRight: 5, marginLeft: 0}}/>
             <GoTriangleDown style={{fontSize: 20, marginRight: 10, marginLeft: 0}}/>
              {module.name} - {module.description}
              <div className="float-end">
                <FaCircleCheck style={{fontSize: 20, color: "green"}}/>
                <AiOutlinePlus style={{marginLeft: 5}}/>
                <FaEllipsisVertical style={{marginLeft: 5}}/>
              </div>
              </h4>
            </li>
            <li key={index} className="list-group-item">
              <h5>Learning Objectives</h5>
              {module.name}
            </li>
          </>
      ))
            }</>
    </ul></>
  );
}
export default ModuleList;