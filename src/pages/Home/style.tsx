import styled from 'styled-components'

export const WrapperHome = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-template-areas: 'swipper last-podcast';
    width: 100%;

    .swipper {
        grid-area: swipper;
        width: 100%;
    }

    .last-podcast {
        background-color: red;
        width: 100%;
        grid-area: last-podcast;
    }
`