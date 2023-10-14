import styled from "styled-components";

export const StyledCarCardsContainer = styled.div`
  width: 252px;
  height: 460px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px 25px 15px;

  .cardFooter {
    display: flex;
    gap: 10px;
    button {
      border: none;
      padding: 6px;
      width: 100px;
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: white;
      border-radius: 5px;
    }
  }
`;

export const StyledCarCardsEditContainer = styled.div`
  width: 310px;
  height: 480px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 15px 15px;
  transition: 0.7s;
`;
