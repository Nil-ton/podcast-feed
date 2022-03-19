import styled from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { IAsideProps } from './types'


export const WrapperOutlet = styled.div<IAsideProps>`
    padding-left: calc(${props => props.width} + .5rem);

    ${media.portable} {
        padding-left: calc(${props => props.width} - 1.5rem);
    }

    ${media.ipad} {
        padding-left: calc(${props => props.width} - 3.5rem);
    }
    ${media.smartphone} {
        padding-left: calc(${props => props.width} - 5.5rem);
    }

    ${media.firstGen} {
        padding-left: calc(${props => props.width} - 7.5rem);
    }
`

export const WrapperAside = styled.aside<IAsideProps>`
    width: 100%;
    max-width: ${props => props.width};

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;

    ${media.portable} {
        width: calc(${props => props.width} - 2rem);
    }
    ${media.ipad} {
        width: calc(${props => props.width} - 4rem);
        h3 {
            font-size: .95rem;
        }
    }

    ${media.smartphone} {
        width: calc(${props => props.width} - 6rem);
        h3 {
            display: none;
        }
    }

    ${media.firstGen} {
        width: calc(${props => props.width} - 8rem);
    }
`

export const NavButtonHomeAndAbout = styled.nav<IAsideProps>`
    margin: 3rem 0;
   li {
       padding: .5rem;
       display: flex;
       align-items: center;
   }
   span {
       width: calc(${props => props.width}/5);
       height: .2rem;
       background-color: ${theme.color.button.primary};
       
       position: absolute;
       left: calc(${props => props.width}/10);
   }

   a {
       font-family: ${theme.fontFamily.primary};
       font-size: 1rem;
   }

   i {
        display: none;
    }

   ${media.portable} {
       span {
           left: calc(${props => props.width}/20);
       }
   }

   ${media.ipad} {
       span {
           width: 1.4rem;
       }
       a{
           font-size: .95rem;
       }
   }

   ${media.smartphone} {
       margin: 1rem 0;
       span, a {
           display: none;
           visibility: hidden;
       }

       i {
           display: flex;
           font-size: 1.5rem;
           padding: .5rem 1rem;
       }
   }
`

export const NavPodcastList = styled.nav<IAsideProps>`
    display: flex;
    justify-content: flex-start;
    margin-top:3rem;
    ${media.ipad} {
        margin-right: -2rem;
    }
    ${media.smartphone} {
        margin: 0;
    }
    `

export const PodcastList = styled.ul<IAsideProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-left: 3rem; */
    li{
        display: flex;
        align-items: center;
        justify-content: baseline;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .skeleton > span {
        animation: skeleton-loading 1s linear infinite alternate;
        background-color: hsl(200, 20%, 70%);
        opacity: .7;
    }

    .skeleton > span:nth-child(1) {
        width: ${theme.size.small}; 
        height: ${theme.size.small};
        border-radius: 50%;
        padding: 1rem;
    }

    .skeleton > span:nth-child(n + 2) {
        width: 5rem;
        height: .5rem;
    }
    
    @keyframes skeleton-loading {
        to {
            background-color: hsl(200, 20%, 95%);
        }
    }

    p {
        font-family: ${theme.fontFamily.primary};
    }

    ${media.ipad} {
        
        p {
            font-size: .95rem;
        }

        li {
            gap: .5rem;
        }
    }

    ${media.smartphone} {
        p {
            display: none;
        }

        li {
            margin: 0;
            padding: .5rem 1rem;
        }
    }
`