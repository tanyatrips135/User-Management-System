import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { MdOutlinePeopleAlt, MdOutlinePersonAddAlt } from "react-icons/md";

function Sidebar() {
    return (
        <div className={classes.sidenav}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? classes.active : undefined)}
                        end
                    >
                        <MdOutlinePeopleAlt size={'24px'}/>
                        All Team Members
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/create"
                        className={({ isActive }) => (isActive ? classes.active : undefined)}
                    >
                        <MdOutlinePersonAddAlt size={'24px'}/>
                        Create Profile
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
