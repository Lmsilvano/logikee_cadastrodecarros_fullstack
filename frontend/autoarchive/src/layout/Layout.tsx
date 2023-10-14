import Header from "../components/header";
import Hero from "../components/hero";
import Nav from "../components/nav";
import { StyledMain } from "./Main.style";

interface LayoutProps {
  children: React.ReactNode;
  guidance: string;
}

function Layout({ children, guidance }: LayoutProps) {
  if (!guidance) {
    return (
      <>
        <Header>
          <Nav />
        </Header>
        <Hero />
        <StyledMain isVertical={false}>{children}</StyledMain>
      </>
    );
  } else {
    return (
      <>
        <Header>
          <Nav />
        </Header>
        <Hero />
        <StyledMain isVertical={true}>{children}</StyledMain>
      </>
    );
  }
}

export default Layout;
