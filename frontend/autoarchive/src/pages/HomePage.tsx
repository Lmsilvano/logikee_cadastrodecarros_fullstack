import CarRegSvg from "../assets/CarReg";
import EyeSvg from "../assets/Eye";
import HomeCards from "../components/cards/home";
import Layout from "../layout/Layout";
function HomePage() {
  return (
    <Layout guidance="">
      <HomeCards
        icon={<EyeSvg />}
        title="Visualizar Carros"
        text="Também é possível editar e deletar os carros cadastrados"
        buttontext="Visualizar"
      />
      <HomeCards
        icon={<CarRegSvg />}
        title="Cadastrar Novo Carro"
        text="Lorem ipsum dolor sit amet consectetur "
        buttontext="Cadastrar"
      />
    </Layout>
  );
}

export default HomePage;
