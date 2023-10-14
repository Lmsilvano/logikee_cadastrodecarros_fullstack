import { StyledNav } from "./Nav.style";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "activenav" : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Cadastrar"
            className={({ isActive }) => {
              return isActive ? "activenav" : "";
            }}
          >
            Cadastrar{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Visualizar"
            className={({ isActive }) => {
              return isActive ? "activenav" : "";
            }}
          >
            Visualizar{" "}
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
