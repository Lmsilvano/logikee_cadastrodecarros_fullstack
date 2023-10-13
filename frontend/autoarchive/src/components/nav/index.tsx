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
          <Link to="/Cadastrar">Cadastrar </Link>
        </li>
        <li>
          <Link to="/Visualizar">Visualizar </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
