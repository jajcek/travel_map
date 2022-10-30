import React from 'react';
import styled from 'styled-components'

import {COLORS} from './StyleConstants';

const Center = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    text-align: center;
    margin: auto;
    height: 30%;
`;

const Loader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: ${COLORS.HEADER_BACKGROUND};
        animation: loader-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
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
    @keyframes loader-animation {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
`;

class LoadingPage extends React.Component<{}, {}> {
    render() {
        return (
            <Center>
                <Loader><div></div><div></div><div></div></Loader>
            </Center>
        );
    }
}

export default LoadingPage;