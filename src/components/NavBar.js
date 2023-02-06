// import { Nav } from "react-bootstrap";
import "../styles/styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// Link 쓸 땐 href 대신 to를 써줘야 함. 원래 <a href="/"> 이런식으로 써있었다면 걔네를 <Link to="/"> 이런식으로 바꾸기.

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CHERRIE's
      </Link>
      <ul>
        <CustomLink to="/colors">Color Dictionary</CustomLink>
        <CustomLink to="/todo">Todo List</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

// pass href, children, and custop props -> href 대신 to !
// to 는 우리가 향하고자 하는 url임
function CustomLink({ to, children, ...props }) {
  // active page를 나타내주는 path
  // const path = window.location.pathname; -> React router 없을 때는 이렇게 쓰지만, router을 쓰니까 useMatch와 useResolvedPath 쓸 수 있음

  // useResolvedPath는 absolute path나 relative path를 가지고 현재 사용자가 있는 path와 결합해서 우리가 도달할 actual full path를 줌. 부분적인 path를 줘도 완전한 path로 바꿔주는 역할을 한다 ?
  const resolvedPath = useResolvedPath(to);

  // useMatch는 현재 있는 path와 우리가 검증하고자 하는 path를 비교해준다. 여기에는 string이나 object를 넘겨줄수 있다!
  // 여기서 resolvedPath.pathname은 window.location.pathname 와 동일한 역할을 함.
  // react router는 url들의 부분적 매칭도 지원해주기 때문에, 우리는 end: true 를 설정해야 path들이 통째로 다 match하는지 확인 할 수 있다.
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    // li의 className은 path와 href가 같다면, 즉 지금 있는 곳이 active path 라면, 'active'가 된다. 저 둘이 같지 않다면, className은 그냥 ''.
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
