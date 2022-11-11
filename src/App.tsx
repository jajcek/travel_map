import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled, {keyframes} from 'styled-components'

import {COLORS} from './CommonStyles';
import Header from './Header';
import Footer from './Footer';
import LoadingPage from './ux/LoadingPage';
import ErrorBoundary from './ux/ErrorBoundary';
import NotFoundPage from './ux/NotFoundPage';

const IntroPage = lazy(() => import('./pages/intro/IntroPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsPage'));
const ProjectPageLoader = lazy(() => import('./pages/projects/ProjectPageLoader'));
const MapWithDataLoader = lazy(() => import('./pages/travel/MapWithDataLoader'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));

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
                                    <Route path="/projects" element={<ProjectsPage />} />
                                    <Route path="/projects/:type/:id" element={<ProjectPageLoader />} />
                                    <Route path="/travel" element={<MapWithDataLoader />} />
                                    <Route path="/contact" element={<ContactPage />} />
                                    <Route path="*" element={<NotFoundPage />} />
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
