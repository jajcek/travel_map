import React, {Suspense, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled, {keyframes} from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import PageRoutes from './PageRoutes';
import LoadingPage from './LoadingPage';
import ErrorBoundary from './ErrorBoundary';

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

const RoutedApp = () => {
    const [transition, setTransition] = useState<string>();
    const navigate = useNavigate();
    const location = useLocation();

    function navigateWithHiding(href: string) {
        if (href === location.pathname) {
            return;
        }

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
            <Header clickHandler={navigateWithHiding} />
            <ScrolledContainer className={transition}>
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage onLoad={showLoading} />}>
                        <PageRoutes navigateFn={navigateWithHiding} showFn={showSmoothly} />
                    </Suspense>
                </ErrorBoundary>
            </ScrolledContainer>
            <Footer />
        </React.Fragment>
    );
};

export default RoutedApp;