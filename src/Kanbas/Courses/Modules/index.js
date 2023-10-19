import ModuleList from "./ModuleList";
import {AiOutlineCheckCircle} from "react-icons/ai";
import{GoTriangleDown} from "react-icons/go";
import {FaEllipsisVertical} from "react-icons/fa6";

function Modules() {
  return (
    <div className="container-fluid">
      <h2>Modules</h2>
      <div className="row" style={{marginBottom:10}}>
        <div className="col">
          <div className="float-end">
          <button className="btn btn-light">Collapse All</button>
          <button className="btn btn-light">View Progress</button>
          <button className="btn btn-light">
            <AiOutlineCheckCircle style={{color:"green"}}/>
            Publish All
            <GoTriangleDown />
          </button>
          <button className="btn btn-danger">+ Module</button>
          <button className="btn btn-light"><FaEllipsisVertical /></button>
          </div>
        </div>
      </div>
      <div className="row">
        <ModuleList />
      </div>
      
    </div>
  );
}

export default Modules;