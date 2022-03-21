import styled from 'styled-components'
import { theme } from '../../style/theme'

type props = {
    src:string
}


export const LastPodcast = styled.div<props>`
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,70%), rgba(0,0,0,100%)),url(${props => props.src});
    width: 100%;
    height: 100%;
    grid-area: last-podcast;

    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    div {
        color: white;
        font-family: ${theme.fontFamily.primary};
        position: absolute;
        bottom: 2rem;
        margin: 2rem 1rem;
    }

    h2 {
        font-size: 1rem;
    }

    h3 {
        font-size: 1.2rem;
    }
`

export const WrapperHome = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 'swipper last-podcast';
    width: 100%;
    height: 300px;

    .swipper {
        grid-area: swipper;
        width: 100%;
        height: 100%;
    }

    ${LastPodcast} {
        grid-area: last-podcast;
    }
`