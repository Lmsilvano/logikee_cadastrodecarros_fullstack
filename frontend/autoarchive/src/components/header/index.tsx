import CarLogoSvg from "../../assets/CarLogo";
import { StyledHeader } from "./Header.style";
import { StyledLogoContainer } from "./LogoContainer.style";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <CarLogoSvg />
        <h3>Car Archive</h3>
      </StyledLogoContainer>
      {children}
    </StyledHeader>
  );
};

export default Header;
