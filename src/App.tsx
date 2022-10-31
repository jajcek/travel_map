import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import styled from 'styled-components'

import {COLORS} from './StyleConstants';
import Header from './Header';
import Footer from './Footer';
import LoadingPage from './ux/LoadingPage';
import ErrorBoundary from './ux/ErrorBoundary';

const IntroPage = lazy(() => import('./pages/intro/IntroPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const WorkPage = lazy(() => import('./pages/work/WorkPage'));
const MapWithDataLoader = lazy(() => import('./pages/travel/MapWithDataLoader'));

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ScrolledContainer = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    overflow-y: auto;
    height: 100%;
`;

const WorkItemPageLoader = () => {
    const {id} = useParams();
    const Item = lazy(() => import(`./pages/work/${id}/WorkItemPage`));

    return (
        <Suspense fallback={<LoadingPage />}>
            <Item />
        </Suspense>
    );
};

class App extends React.Component<{}, {}> {
    render() {
        return (
            <AppContainer className="travel-app">
                <BrowserRouter>
                    <Header />
                    <ScrolledContainer>
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingPage />}>
                                <Routes>
                                    <Route path="/" element={<IntroPage />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/work" element={<WorkPage />} />
                                    <Route path="/work/:id" element={<WorkItemPageLoader />} />
                                    <Route path="/travel" element={<MapWithDataLoader />} />
                                </Routes>
                            </Suspense>
                        </ErrorBoundary>
                    </ScrolledContainer>
                    <Footer />
                </BrowserRouter>
            </AppContainer>
        );
    }
}

export default App;
