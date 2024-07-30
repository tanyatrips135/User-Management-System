import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./CreateProfile.module.css";

function CreateProfile() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    function submitHandler(event) {
        event.preventDefault();
        const user = {
            name: name,
            email: email,
        };
        fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <div className={classes.background}>
            <div className={classes.heading}>Create Profile</div>
            <div className={classes.container}>
                <form className={classes.form} onSubmit={submitHandler}>
                    {/* <p>
                    <label for="image">Upload photo</label>
                    <p className={classes.sublabel}>Upload passport size photo</p>
                    <input type="file" id="image" name="image" accept="image/*" />
                </p> */}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            required
                            placeholder="Enter full name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email-ID</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={classes.buttonsFrame}>
                        <input type="reset" value="Cancel" className={classes.cancel} />
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProfile;
