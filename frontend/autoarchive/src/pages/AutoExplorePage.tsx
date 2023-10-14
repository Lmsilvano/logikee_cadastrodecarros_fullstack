import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Layout from "../layout/Layout";
import CarCards from "../components/cards/cars";
import { CarProps } from "../utils/interfaces/carProps";
import { useEditContext } from "../context/editContext";
import { StyledCarCardsContainer } from "../components/cards/cars/CarCards.style";
function AutoExplorePage() {
  const [carData, setCarData] = useState<CarProps[]>([]);
  const [filterCars, setFilterCars] = useState<string>("");
  const { editString } = useEditContext();
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
    console.log("renderizei na explore");
  }, [editString]);
  const filteredCars: CarProps[] = useMemo(() => {
    if (filterCars) {
      const lowerSearch = filterCars.toLowerCase();
      return carData.filter(
        (car) =>
          car.marca.toLowerCase().includes(lowerSearch) ||
          car.modelo.toLowerCase().includes(lowerSearch) ||
          car.chassi.toLowerCase().includes(lowerSearch)
      );
    } else return carData;
  }, [filterCars, carData]);

  if (carData.length > 0) {
    return (
      <Layout guidance="column">
        <input
          type="text"
          placeholder="Procure por Modelo/Marca/Chassi"
          value={filterCars}
          onChange={(e) => setFilterCars(e.target.value)}
          className="searchInput"
        />
        <StyledCarCardsContainer>
          {filteredCars.map((car, i) => {
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
        </StyledCarCardsContainer>
      </Layout>
    );
  } else {
    return (
      <Layout guidance="">
        <h3>Sem carros Cadastrados no momento</h3>
      </Layout>
    );
  }
}

export default AutoExplorePage;
