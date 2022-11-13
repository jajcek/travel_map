import React from 'react';
import {BrowserRouter} from "react-router-dom";
import styled from 'styled-components'

import {COLORS} from './CommonStyles';
import AnimatedRoutedApp from './ux/AnimatedRoutedApp';

const AppContainer = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const App = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <AnimatedRoutedApp />
            </BrowserRouter>
        </AppContainer>
    );
};

export default App;