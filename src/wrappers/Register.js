import styled from "styled-components";

const RegisterStyled = styled.div`
  #register-styled {
    background-color: #001122;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.1rem;
    right: 1%;
    border-radius: 10px;
    align-items: center;
  }
  #register-status{
    margin-bottom: .7rem;
  }
  .registered{
    color: #00aaaa;
  }
  .not-registered{
    color: #aa1111;
  }
  #name,
  #email,
  #pass {
    background-color: inherit;
  }
  #pass {
    margin-bottom: 0.3rem;
  }
  input {
    background-color: inherit;
    border: 1px solid #aaaaaa;
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    text-align: center;
    color: inherit;
  }
  input:focus {
    background-color: inherit;
  }
  button {
    width: fit-content;
    background-color: inherit;
    color: inherit;
    border: 1px solid #aaaaaa;
    padding: 0.3rem;
  }
  button:hover {
    color: #ffffff;
    cursor: pointer;
  }
  #toggler {
    align-self: flex-end;
    margin-top: -13%;
    background-color: inherit;
  }
  #toggler > button {
    border: 0;
  }
  #toggler > button:hover {
    text-decoration: underline;
  }
`;

export default RegisterStyled;
