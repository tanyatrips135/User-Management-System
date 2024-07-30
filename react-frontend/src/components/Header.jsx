import { Link } from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
    return (
        <div className={classes.header}>
            <Link to="/"><img src="src/assets/uolo.svg" alt="Uolo"></img></Link>
            <div>Name</div>
        </div>
    )
}

export default Header;