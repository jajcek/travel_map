import React, {Suspense, lazy, useState} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import styled, {keyframes} from 'styled-components';

import {COLORS} from '../CommonStyles';
import Header from '../Header';
import Footer from '../Footer';
import LoadingPage from './LoadingPage';
import ErrorBoundary from './ErrorBoundary';
import NotFoundPage from './NotFoundPage';

const ANIMATION_DURATION_MS = 300;

const hideAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const showAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const ScrolledContainer = styled.div`
    overflow-y: auto;
    height: 100%;

    &.hide {
        animation: ${hideAnimation} ${ANIMATION_DURATION_MS/1000}s;
        opacity: 0;
    }

    &.load {
        opacity: 1;
    }

    &.show {
        animation: ${showAnimation} ${ANIMATION_DURATION_MS/1000}s;
        opacity: 1;
    }
`;

export const lazyMinLoadTime = <T extends React.ComponentType<any>>(factory: () => Promise<{ default: T }>, minLoadTimeMs = 2000) =>
  lazy(() =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minLoadTimeMs))]).then(([moduleExports]) => moduleExports)
  );

const IntroPage = lazy(() => import('../pages/intro/IntroPage'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/projects/ProjectsPage'));
const ProjectPageLoader = lazy(() => import('../pages/projects/ProjectPageLoader'));
const MapWithDataLoader = lazy(() => import('../pages/travel/MapWithDataLoader'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));

const RoutedApp = () => {
    const [transition, setTransition] = useState<string>();
    const navigate = useNavigate();

    function handleNavClick(href: string) {
        console.log('hide');
        setTransition('hide');
        setTimeout(() => {
            navigate(href);
        }, ANIMATION_DURATION_MS);
    }

    function showLoading() {
        setTransition('load');
    }

    function showSmoothly() {
        setTransition('show');
    }

    return (
        <React.Fragment>
            <Header clickHandler={handleNavClick} />
            <ScrolledContainer className={transition}>
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage onLoad={showLoading} />}>
                        <Routes>
                            <Route path="/" element={<IntroPage onLoad={showSmoothly}/>} />
                            <Route path="/about" element={<AboutPage onLoad={showSmoothly}/>} />
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
        </React.Fragment>
    );
};

export default RoutedApp;