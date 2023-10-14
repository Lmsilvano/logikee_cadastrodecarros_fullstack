import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 4vh 15vw 2vh 15vw;
  display: flex;
  flex-direction: row-reverse;
  gap: 25px;
  justify-content: space-around;
  flex-wrap: wrap;

  .modal_delete {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #fff;
    z-index: 1001;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 30px;
    .modal-footer {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;
