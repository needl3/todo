import styled from "styled-components";
const TodoItemStyled = styled.div`
  input,
  button {
    height: 2rem;
    cursor: pointer;
  }
  #check-button {
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    font-size: larger;
    color: #aaaaaa;
    background-color: inherit;
  }
  #check-button:hover {
    color: aquamarine;
    transition: 0.3s;
  }
  #todo-item {
    display: flex;
    align-items: center;
    margin: 0.4rem 0;
    padding: 0.5rem;
    border: 1px solid #aa8888;
    border-radius: 10px;
    opacity: 1;
    animation: appear 0.6s linear;
  }
  @keyframes appear {
    0% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
  .not-checked {
    background-color: inherit;
  }
  .checked {
    background-color: #15c35d44;
  }
  #title {
    border-radius: 10px;
    border: none;
    width: 100%;
    margin: 0 1rem;
    font-size: medium;
    font-weight: bolder;
    border: 1px solid rgb(49, 75, 67);
    background-color: inherit;
    padding: 0 0.5rem;
    color: #aaaaaa;
    text-transform: uppercase;
    text-align: center;
  }
  #title:focus {
    border-color: aquamarine;
    transition: 0.3s;
    color: #ffffff;
  }
  input:focus {
    outline: none;
    border-color: aquamarine;
    color: aqua;
  }
  #edit {
    display: flex;
  }
  #edit:hover,
  #edit:focus {
    color: aqua;
  }
  #edit > * {
    font-size: large;
    border: 0;
    margin: 0 0.4rem;
    background-color: inherit;
    color: #aaaaaa;
  }
`;

export default TodoItemStyled;
