import styled from "styled-components";

const EditStyled = styled.div`
  #edit-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 60%;
    background-color: #111122;
    border: 1px solid aqua;
    border-radius: 10px;
  }
  input {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: #aaaaaa;
  }
  #title {
    padding: 1rem;
    margin: 10% 0 5% 0;
    width: 70%;
    background-color: inherit;
    border: 1px solid aquamarine;
    text-transform: uppercase;
  }
  #description {
    padding: 1rem;
    height: 50%;
    width: 70%;
    background-color: inherit;
    border: 1px solid aquamarine;
    margin-bottom: 5%;
  }
  #save {
    background-color: inherit;
    padding: 0.5rem 1rem;
    color: white;
    border: 1px solid aquamarine;
    width: 10%;
  }
  #save:hover {
    cursor: pointer;
    border-color: green;
    color: aqua;
    transition: .5s;
  }
  .saving {
    text-align: center;
    animation: process 1s infinite;
  }
  #description{
    text-align: center;
    font-size: large;
    color: inherit;
  }
  @keyframes process {
    0% {
      color: white;
    }
    50% {
      color: #444444;
    }
    100% {
      color: white;
    }
  }
`;

export default EditStyled;
