import Header from "../components/header";
import Hero from "../components/hero";
import Nav from "../components/nav";
import { StyledMain } from "./Main.style";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Layout;
