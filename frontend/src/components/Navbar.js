import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>VAW Tracker</h1>
                </Link>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Report Case</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar