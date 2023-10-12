import { StyledNav } from "./Nav.style";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar </Link>
        </li>
        <li>
          <Link to="/visualizar">Visualizar </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
