import styled from "styled-components";
export const StyledPFormError = styled.p``;

export const StyledFormContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 100vh;
  .error {
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
  .sucess {
    background: #00ff48e4;
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
  form {
    p {
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 500;
      span {
        font-weight: bolder;
      }
    }
    width: 100%;
    max-width: 750px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    label {
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: bolder;
    }
    section {
      width: 100%;
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    button {
      border: none;
      padding: 6px;
      width: 150px;
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: white;
      border-radius: 5px;
    }
  }
`;

export const StyledFormEditContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 100vh;
  .error {
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
  .sucess {
    background: #00ff48e4;
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
  form {
    width: 100%;
    max-width: 750px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 25px;
    label {
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: bolder;
    }
    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .formFooter {
      display: flex;
      justify-content: space-around;
      width: 100%;
      button {
        border: none;
        width: 40%;
        padding: 6px;
        //width: 150px;
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: white;
        border-radius: 5px;
      }
    }
  }
`;
