import {Link} from 'react-router-dom';

const Navbar = () => {

    // const handleClink = () => {
    //     console.log("registered");
    // }
    return (
        <nav className="navbar">
            <h1><Link to="/">Vroom</Link></h1>
            <div className="links">
                <Link to="/create">Register</Link>
            </div>
        </nav>
        
    ); 
}

export default Navbar;