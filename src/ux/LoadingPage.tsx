/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {COLORS} from '../CommonStyles';
import Loader from './Loader';
import CenteredContainer from '../ux/CenteredContainer';

const LoadingPage = (props: {onLoad: () => void}) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    return (
        <CenteredContainer>
            <Loader color={COLORS.HEADER_BACKGROUND} />
        </CenteredContainer>
    );
};

export default LoadingPage;