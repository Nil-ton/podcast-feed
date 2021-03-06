import styled from 'styled-components'
import { theme } from '../../style/theme'

export const WrapperAside = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 'aside outlet';
    background-color: black;







    aside {
        width: 100%;
        height: 100vh;
        grid-area: aside;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: black;
    }



    
    
    .logo > h2 {
        width: 50%;
        padding-left: 1rem;
        font-family: ${theme.fontFamily.secundary};
        font-weight: 400;
        font-size: 1rem;
    }


    


    .inicio {
        margin-bottom: 2rem;
        margin-top: 2rem;
        padding-left: 1rem;
        cursor: pointer;
    }
    .inicio > a {
        font-family: ${theme.fontFamily.primary};
        color: ${theme.color.font.secondary};
        padding-left: .5rem;
    }

    .inicio > i {
        font-size: 1.5rem;
    }



    .label-podcast > h2 {
        font-family: ${theme.fontFamily.secundary};
        font-size: .5rem;
        font-weight: bold;
        color: ${theme.color.font.secondary};
        font-weight: 400;
    }





    .icon > ul > li {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        gap: .5rem;
        padding-left: .5rem;
        cursor: pointer;
    }

    .icon > ul > li > img {
        width: ${theme.size.small};
        border-radius: 50%;
    }
    .icon > ul > li > p {
        font-family: ${theme.fontFamily.primary};
        color: ${theme.color.font.secondary};
    }






    .search {
        position: relative;
    }

    .search > input {
        width: 100%;
        border-radius: 10px;
        padding: .5rem;
        padding-left: 2.5rem;
        outline: none;
        box-shadow: none;
        border: none;
        background-color: black;
        color: white;
        font-family: ${theme.fontFamily.primary};
        font-size: 1rem;
    }

    .search > i {
        position: absolute;
        color: ${theme.color.font.secondary};
        left: .5rem;
        top: .7rem;
    }






    .outlet {
        grid-area: outlet;
        padding: 1rem 2rem;
        background-color: #121212;
        width: 100%;
        height: 100vh;
    }
`