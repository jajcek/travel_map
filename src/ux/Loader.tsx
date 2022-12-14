import React from "react";
import styled, {keyframes} from 'styled-components';

const loaderAnimation = keyframes`
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
`;

const LoaderComponent = styled.div<{backgroundColor: string}>`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: ${props => props.backgroundColor};
        animation: ${loaderAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
`;

type Props = {
    color: string
}

const Loader = (props: Props) => {
    return <LoaderComponent backgroundColor={props.color}><div></div><div></div><div></div></LoaderComponent>;
};

export default Loader;