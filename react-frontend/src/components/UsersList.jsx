import { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import classes from "./UsersList.module.css";
import User from "./User";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const USERS_PER_PAGE = 8;

function UsersList() {
    const [searchParams] = useSearchParams();
    let page = searchParams.get("page") || 1;

    const [usersData, setUsers] = useState([]);
    const users = usersData.users;
    // console.log(usersData);
    const pages = usersData.pages;

    useEffect(() => {
        fetch(`http://localhost:8080/users?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    }, [page]);

    return (
        <div className={classes.content}>
            <div className={classes.heading}>Our Team</div>

            <div className={classes["grid-container"]}>
                {users &&
                    users.map((user) => (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            image={user.image}
                        />
                    ))}
            </div>

            <div className={classes["pagination-grid"]}>
                <NavLink to={`/?page=${+page - 1 || 1}`}>
                    <GrFormPrevious />
                </NavLink>

                {[...Array(pages).keys()]
                    .map((i) => i + 1)
                    .map((i) => (
                        <NavLink key={i} to={`?page=${i}`}>
                            {i}
                        </NavLink>
                    ))}

                <NavLink to={`/?page=${page < pages ? +page + 1 : pages}`}>
                    <GrFormNext />
                </NavLink>
            </div>
        </div>
    );
}

export default UsersList;
