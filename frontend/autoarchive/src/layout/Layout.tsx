import Header from "../components/header";
import Hero from "../components/hero";
import Nav from "../components/nav";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
        <Hero />
        {children}
      </main>
    </>
  );
}

export default Layout;
