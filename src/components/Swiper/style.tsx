import styled from 'styled-components'
import { theme } from '../../style/theme'


type props = {
    src:string
}

export const WrapperSwiper = styled.div<props>`
    height: 500px;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,70%), rgba(0,0,0,100%)), url(${props => props.src});
    background-repeat:round;
    background-position: 0% center;
    background-size: contain;
    position: relative;
    div {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
        position: absolute;
        bottom:2rem ;
        margin: 2rem;
    }

    p {
        color: white;
        font-family: ${theme.fontFamily.primary};
        margin-top: .5rem;
    }
    h2 {
        color: white;
        font-family: ${theme.fontFamily.primary};
    }
`