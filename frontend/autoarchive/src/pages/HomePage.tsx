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
        text="Também é possível editar, deletar e buscar os carros."
        buttontext="Visualizar"
      />
      <HomeCards
        icon={<CarRegSvg />}
        title="Cadastrar Novo Carro"
        text="Lorem ipsum dolor sit amet consectetur "
        buttontext="Cadastrar"
      />
      <iframe
        src="https://vk.com/video_ext.php?oid=259866354&id=456239135&hash=cd1f68f175c367d6"
        width="426"
        height="240"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://vk.com/video_ext.php?oid=259866354&id=456239383&hd=2&hash=ce5003535f742af2"
        width="853"
        height="480"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}

export default HomePage;
