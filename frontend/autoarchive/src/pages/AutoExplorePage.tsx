//import axios from 'axios';
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import CarCards from "../components/cards/cars";
import { carros } from "../utils/fakeData";
import { CarProps } from "../utils/interfaces/carProps";

const fetchCarData = async (): Promise<CarProps[]> => {
  return carros;
};

function AutoExplorePage() {
  const [carData, setCarData] = useState<CarProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCarData(); //
      setCarData(data);
    };

    fetchData();
  }, []);

  if (carData) {
    return (
      <Layout>
        {carData.map((car, i) => {
          return (
            <CarCards
              key={i}
              id={car.id}
              marca={car.marca}
              modelo={car.modelo}
              cor={car.cor}
              ano={car.ano}
              preco={car.preco}
              chassi={car.chassi}
            />
          );
        })}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>Sem carros Cadastrados no momento</p>
      </Layout>
    );
  }
}

export default AutoExplorePage;
