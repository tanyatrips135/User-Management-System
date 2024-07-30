import classes from "./User.module.css";

function User({ id, name, email, image }) {
    return (
        <div className={classes["grid-item"]}>
            <img className={classes.pfpimg} src={image} alt="Profile Picture"></img>
            <div className={classes.name}>{name}</div>
            <div>{email}</div>
        </div>
    );
}

export default User;
