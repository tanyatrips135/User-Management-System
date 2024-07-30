import Sidebar from "./components/Sidebar";
import UsersList from "./components/UsersList";
import Header from "./components/Header";
import classes from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <div className={classes.clearfix}>
                <Sidebar />
                {/* <UsersList /> */}
                <Outlet />
            </div>
        </>
    );
}

export default App;
