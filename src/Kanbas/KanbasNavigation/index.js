import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaSlideshare } from "react-icons/fa6";
import {FaClipboardQuestion} from "react-icons/fa6";
import {FaN} from "react-icons/fa6";
import "./index.css";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];

  const linkToIcon = {
    "Account": <BiUserCircle style={{color: "gray", fontSize: 50}}/>,
    "Dashboard": <RiDashboard3Fill className="wd-icon"/>,
    "Courses": <FaBook className="wd-icon"/>,
    "Calendar": <BsFillCalendar2WeekFill className="wd-icon"/>,
    "Inbox": <FaInbox className="wd-icon"/>,
    "History": <FaHistory className="wd-icon"/>,
    "Studio": <FaSlideshare className="wd-icon"/>,
    "Help": <FaClipboardQuestion className="wd-icon"/>,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 120, height: 2000}}>
      <FaN className="wd-icon" style={{fontSize: 75, color: "red", margin: 21}}/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIcon[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;