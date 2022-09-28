import styled from "styled-components"

const MainStyled = styled.div`
   #todo-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: auto;
    }
    #add-todo{
        width: 30%;
        height: 3rem;
        border: 1px solid #444444;
        border-radius: 10px;
        font-size: 2rem;
        margin: .5rem 0;
        background-color: inherit;
        cursor: pointer;
        color: #444444;
    }
    #add-todo:hover{
        border-color: aquamarine;
        color: aquamarine;
        transition: .3s;
    }
    #todo-created{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`

export default MainStyled