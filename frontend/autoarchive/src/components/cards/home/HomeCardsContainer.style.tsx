import styled from "styled-components";

export const StyledHomeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 350px;
  padding: 8px 15px 5px 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .upperCardBody {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    a {
      width: 15%;
      min-width: 50px;
      height: 38%;
      min-height: 90px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    h2 {
      color: ${({ theme }) => theme.colors.tertiary};
      text-align: center;
    }
  }
  .lowerCardBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    margin-top: 20px;
    justify-content: space-evenly;
    p {
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 400;
    }
    a {
      text-decoration: none;
      letter-spacing: 0.1rem;
      color: white;
      padding: 8px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 500;
    }
  }
`;
