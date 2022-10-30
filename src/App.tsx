import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from 'styled-components'

import {COLORS} from './StyleConstants';
import Header from './Header';
import Footer from './Footer';
import IntroPage from './pages/intro/IntroPage';
import AboutPage from './pages/about/AboutPage';
import MapWithDataLoader from './pages/travel/MapWithDataLoader';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ScrolledContainer = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    display: flex;
    flex: 1;
    overflow-y: auto;
`;

class App extends React.Component<{}, {}> {
    render() {
        return (
            <AppContainer className="travel-app">
                <BrowserRouter>
                    <Header />
                    <ScrolledContainer>
                        <Routes>
                            <Route path="/" element={<IntroPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/travel" element={<MapWithDataLoader />} />
                        </Routes>
                    </ScrolledContainer>
                    <Footer />
                </BrowserRouter>
            </AppContainer>
        );
    }
}

export default App;
