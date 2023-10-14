import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CarCards from "../components/cards/cars";
import { CarProps } from "../utils/interfaces/carProps";

function AutoExplorePage() {
  const [carData, setCarData] = useState<CarProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/v1/cars")
        .then(({ data }) => {
          setCarData(data.response);
        })
        .catch((error) => {
          console.error(
            "Erro ao criar registro:",
            error.response ? error.response.data : error.message
          );
          setCarData([]);
        }); //
    };

    fetchData();
  }, []);

  if (carData.length > 0) {
    return (
      <Layout>
        {carData.map((car, i) => {
          return (
            <CarCards
              key={i}
              id={car.chassi}
              marca={car.marca}
              modelo={car.modelo}
              cor={car.cor}
              ano={car.ano.toString()}
              preco={car.preco.toString()}
              chassi={car.chassi}
            />
          );
        })}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h3>Sem carros Cadastrados no momento</h3>
      </Layout>
    );
  }
}

export default AutoExplorePage;
