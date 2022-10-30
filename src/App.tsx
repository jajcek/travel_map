import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from 'styled-components'

import {COLORS} from './StyleConstants';
import Header from './Header';
import Footer from './Footer';
import LoadingPage from './ux/LoadingPage';

const IntroPage = lazy(() => import('./pages/intro/IntroPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const MapWithDataLoader = lazy(() => import('./pages/travel/MapWithDataLoader'));

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
                        <Suspense fallback={<LoadingPage />}>
                            <Routes>
                                <Route path="/" element={<IntroPage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/travel" element={<MapWithDataLoader />} />
                            </Routes>
                        </Suspense>
                    </ScrolledContainer>
                    <Footer />
                </BrowserRouter>
            </AppContainer>
        );
    }
}

export default App;
