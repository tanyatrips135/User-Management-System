import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import classes from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <div className={classes.clearfix}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}

export default App;
