import { useEffect } from "react";
import {
  StyledCarCardsContainer,
  StyledCarCardsEditContainer,
} from "./CarCardsContainer.style";
import { CarProps } from "../../../utils/interfaces/carProps";
import { useEditContext } from "../../../context/editContext";
import CarForm from "../../forms/registration";
const CarCards: React.FC<CarProps> = ({
  id,
  marca,
  modelo,
  cor,
  chassi,
  ano,
  preco,
}) => {
  const { editString, setEditString, setCarDataContext } = useEditContext();

  useEffect(() => {
    console.log("renderizou carsCard");
  }, []);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //console.log(e.currentTarget.id);
    setEditString(e.currentTarget.id);
    setCarDataContext({ id, marca, modelo, cor, chassi, ano, preco });
  };

  if (editString !== id) {
    return (
      <StyledCarCardsContainer>
        <div className="upperCardBody">
          <h3>{marca}</h3>
          <h3>{modelo}</h3>
          <span>{cor}</span>
        </div>
        <div className="lowerCardBody">
          <p>Chassi: {chassi}</p>
          <p>ano: {ano}</p>
          <p>preco: {preco}</p>
        </div>
        <div className="cardFooter">
          <button
            id={id}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEdit(e)}
          >
            Editar
          </button>
          <button>Excluir</button>
        </div>
      </StyledCarCardsContainer>
    );
  } else {
    return (
      <StyledCarCardsEditContainer>
        <CarForm edit="yes"></CarForm>
      </StyledCarCardsEditContainer>
    );
  }
};

export default CarCards;
