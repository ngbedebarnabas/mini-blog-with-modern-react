import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
            <h1>React Blog</h1>
                <ul  className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create Blog</Link></li>
                    <li><Link to="/view">View</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;