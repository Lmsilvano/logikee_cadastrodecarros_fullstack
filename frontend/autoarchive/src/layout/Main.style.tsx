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
    .deleteError {
      background: #ff0000ad;
      color: white;
      font-weight: 400;
      margin: 5px auto;
      text-align: center;
      width: 100%;
      height: 25px;
      border-radius: 5px;
      transition: 700ms;
      box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
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
