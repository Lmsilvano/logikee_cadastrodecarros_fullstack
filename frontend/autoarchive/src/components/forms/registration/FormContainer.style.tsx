import styled from "styled-components";
export const StyledPFormError = styled.p`
  background: #ff0000ad;
  color: white;
  font-weight: 400;
  margin: 5px auto;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  transition: 700ms;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 7px;
`;

export const StyledFormContainer = styled.div`
  margin-top: 20px;
  width: 65%;
  height: 100vh;

  form {
    width: 100%;
    height: auto;
    gap: 10px;
    .secondRow,
    .fifthRow {
      margin-top: 10px;
      display: flex;
      align-content: center;
      justify-content: space-between;
      align-items: flex-start;
      width: 90%;
      height: 65px;
      div {
        width: 45%;
        margin-top: 0;
      }
      .flexError {
        margin-top: 0;
        width: 45%;
        flex-direction: column;
        height: auto;
        div {
          margin-top: 0 !important;
          width: auto !important ;
        }
      }
    }
    div {
      width: 90%;
      height: auto;
      div {
        margin-top: 10px;
        position: relative;
        height: 50px;
        overflow: hidden;
        width: 100%;
      }

      div input {
        width: 100%;
        height: 100%;
        color: #595f6e !important;
        padding-top: 20px;
        border: none;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: rgb(0 0 0 / 35%) 0px 4px 12px;
      }

      div label {
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid black;
      }
      div label::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid #5fa8d3;
        transform: translateX(-102%);
        transition: transform 0.3s ease;
      }
      div span {
        position: absolute;
        bottom: 5px;
        left: 2px;
        transition: all 0.3s ease;
      }

      div input:focus + label span,
      div input:valid + label span {
        transform: translateY(-125%);
        font-size: 14px;
        color: #5fa8d3;
      }
      div input:focus + label:after,
      div input:valid + label::after {
        transform: translateX(0%);
      }
    }
  }
`;
