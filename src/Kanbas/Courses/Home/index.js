import ModuleList from "../Modules/ModuleList";
import Status from "../Status";


function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <br/>
            <ModuleList />
        </div>
        <div className="col-2">
            <Status />
        </div>
      </div>
    </div>
  );
}
export default Home;