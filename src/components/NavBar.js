// import { Nav } from "react-bootstrap";
import "../styles.css";

function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Cherrie's
      </a>
      <ul>
        <li className="active">
          <a href="/contacts">Contacts</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
