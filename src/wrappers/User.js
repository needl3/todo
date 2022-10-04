import styled from "styled-components";

const UserStyled = styled.div`
  #login-status-container {
    position: relative;
    display: flex;
    justify-content: right;
    flex-direction: column;
    align-items: flex-end;
    background-color: inherit;
  }
  #login-status-container > button{
    margin-right: 7%;
    width: fit-content;
    padding: .4rem 1rem;
  }
  #login-status-container > button:hover{
    color: bisque;
    border-color: bisque;
    cursor: pointer;
  }
  .logged-in{
    color: #00AAAA;
    border: 2px solid #00AAAA;
    background-color: inherit;
  }
  .not-logged-in{
    border: 2px solid #DD5555;
    color: #DD5555;
    background-color: inherit;
  }
`;

export default UserStyled