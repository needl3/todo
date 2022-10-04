import styled from "styled-components";

const LogoutStyled = styled.div`
  #logout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2.1rem;
    right: 5%;
    background-color: #001122;
    padding: .4rem;
    border-radius: 10px;
  }
  p {
    padding: 0 .7em;
    margin-bottom: 1rem;
    color: antiquewhite;
    background-color: inherit;
  }
  span {
    color: aliceblue;
  }
  button {
    padding: .4rem;
    color: #aa5555;
    background-color: inherit;
    border: 1px solid #441111;
    margin-bottom: 1rem;
  }
  button:hover{
    cursor: pointer;
    color: #dd6666;
    border-color: #662222;
  }

`;

export default LogoutStyled