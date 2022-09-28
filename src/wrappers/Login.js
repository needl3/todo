import styled from "styled-components";

const LoginStyled = styled.div`
    #login-dialog{
        top: 2%;
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
    #wrong-status{
        color: #992222;
        margin-bottom: .4rem;
    }
    #email, #pass{
        display: flex;
        justify-content: space-between;
        margin-bottom: .8rem;
    }
    #login-dialog > div > input{
        text-align: center;
        padding: .3rem;
        background-color: inherit;
        border: 1px solid #444444;
        color: #aaaaaa;
    }
    #login-dialog > button{
        width: fit-content;
        border: 1px solid #aaaaaa;
        padding: .2rem 1rem;
        background-color: inherit;
        color: #aaaaaa;
    }
    #login-dialog > button:hover{
        cursor: pointer;
        color: #ffffff;
    }
    

`
export default LoginStyled