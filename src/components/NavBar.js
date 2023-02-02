// import { Nav } from "react-bootstrap";
import "../styles.css";

function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Cherrie's
      </a>
      <ul>
        <CustomLink href="/contacts">Contacts</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

// pass href, children, and custop props
function CustomLink({ href, children, ...props }) {
  // active page를 나타내주는 path
  const path = window.location.pathname;
  return (
    // li의 className은 path와 href가 같다면, 즉 지금 있는 곳이 active path 라면, 'active'가 된다. 저 둘이 같지 않다면, className은 그냥 ''.
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default NavBar;
