import React from 'react';
import styled from 'styled-components'

import {COLORS} from '../CommonStyles';
import Loader from './Loader';

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Center = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    text-align: center;
    margin: auto;
    height: 30%;
`;

class LoadingPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Center>
                    <Loader color={COLORS.HEADER_BACKGROUND} />
                </Center>
            </Container>
        );
    }
}

export default LoadingPage;