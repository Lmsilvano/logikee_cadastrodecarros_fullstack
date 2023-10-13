import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  //height: 15vh;
  //min-height: 85px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 999;
`;
