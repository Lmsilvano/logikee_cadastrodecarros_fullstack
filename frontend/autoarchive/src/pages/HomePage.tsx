import CarRegSvg from "../assets/CarReg";
import EyeSvg from "../assets/Eye";
import HomeCards from "../components/cards/home";
import Layout from "../layout/Layout";
function HomePage() {
  return (
    <Layout>
      <HomeCards
        icon={<CarRegSvg />}
        title="Cadastrar Novo Carro"
        text="Lorem ipsum dolor sit amet consectetur "
        buttontext="Cadastrar"
      />
      <HomeCards
        icon={<EyeSvg />}
        title="Visualizar Carros Cadastrados"
        text="Também é possível editar os carros cadastrados"
        buttontext="Visualizar"
      />
    </Layout>
  );
}

export default HomePage;
