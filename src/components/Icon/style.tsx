import styled from 'styled-components';
import { IIconProps } from './types';

export const WrapperIcon = styled.img<IIconProps>`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;

`;