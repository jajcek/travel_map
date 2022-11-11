import React, {Suspense, lazy, useState} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import styled, {keyframes} from 'styled-components'

import {COLORS} from './CommonStyles';
import RoutedApp from './ux/RoutedApp';

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
                <RoutedApp />
            </BrowserRouter>
        </AppContainer>
    );
};

export default App;