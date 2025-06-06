import { Link } from "react-router";
import wtmLogo from "/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={wtmLogo} alt="MyLogo" className="logo-img" />
          </Link>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          &#9776;
        </label>
        <nav className="navbar-links">
          <Link to="/events">Events</Link>
          <Link to="/create-event">Create Event</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
