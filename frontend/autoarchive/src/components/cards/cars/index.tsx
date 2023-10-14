import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
  const [showDeleteModal, setShowDeleteModal] = useState<string>("");
  const [deleteError, setDeleteError] = useState<string>("");

  useEffect(() => {
    console.log("renderizou carsCard");
  }, []);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditString(e.currentTarget.id);
    setCarDataContext({ id, marca, modelo, cor, chassi, ano, preco });
  };

  //
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/v1/delete-car/${showDeleteModal}`
      );
      setShowDeleteModal("");
      console.log(response.data);
      setEditString("oi");
    } catch (error) {
      console.error("Erro ao deletar veículo:", error);
      setDeleteError("error");
    }
  };

  if (editString !== id) {
    return (
      <>
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
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleEdit(e)
              }
            >
              Editar
            </button>
            <button
              id={id}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setShowDeleteModal(e.currentTarget.id)
              }
            >
              Excluir
            </button>
          </div>
        </StyledCarCardsContainer>
        {showDeleteModal && (
          <>
            <div className="modal_delete">
              <Modal.Dialog>
                <Modal.Header
                  closeButton
                  onClick={() => setShowDeleteModal("")}
                >
                  <Modal.Title>Tem certeza disto?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Deseja realmente deletar o carro de chassi: {chassi}?</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => setShowDeleteModal("")}
                  >
                    Fechar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete()}>
                    Confirmar
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
              {deleteError && (
                <p className="deleteError">
                  Erro ao deletar: Verifique a conexão com o servidor
                </p>
              )}
            </div>
            <div className="overlay"></div>
          </>
        )}
      </>
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
