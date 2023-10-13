import styled from "styled-components";
import fordFinal from "../../assets/fordFinal.jpg";
export const StyledImageContainer = styled.div`
  min-width: 100vw;
  min-height: 54vh;
  padding-top: 5px;
  //position: fixed;
  background-image: url(${fordFinal});
  background-position: center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .heroTextContainer {
    position: relative;
    top: 22vh;
    left: 10vw;
    z-index: 1;
    color: white;
    width: 35%;
  }
`;
