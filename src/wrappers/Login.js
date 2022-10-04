import styled from "styled-components";

const LoginStyled = styled.div`
  #login-dialog {
    right: 1%;
    padding: 2rem 2rem 1rem 2rem;
    display: flex;
    background-color: #001122;
    flex-direction: column;
    position: absolute;
    top: 2.1rem;
    align-items: center;
    border-radius: 10px;
  }
  #wrong-status {
    color: #992222;
    margin-bottom: 0.4rem;
  }
  #email,
  #pass {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }
  #login-dialog > div > input {
    text-align: center;
    padding: 0.3rem;
    background-color: inherit;
    border: 1px solid #444444;
    color: #aaaaaa;
  }
  #login-dialog > button {
    width: fit-content;
    border: 1px solid #aaaaaa;
    padding: 0.2rem 1rem;
    background-color: inherit;
    color: #aaaaaa;
  }
  #login-dialog > button:hover {
    cursor: pointer;
    color: #ffffff;
  }
  #toggler {
    align-self: flex-end;
    margin-right: -6%;
    margin-top: -13%;
  }
  #toggler > button {
    background-color: inherit;
    color: inherit;
    border: 0;
  }
  #toggler > button:hover {
    color: #ffffff;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export default LoginStyled;
