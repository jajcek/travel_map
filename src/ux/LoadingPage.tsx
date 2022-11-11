import React, {useEffect} from 'react';

import {COLORS} from '../CommonStyles';
import Loader from './Loader';
import CenteredContainer from '../ux/CenteredContainer';

const LoadingPage = (props: {onLoad: () => void}) => {
    useEffect(() => {
        props.onLoad();
    });

    return (
        <CenteredContainer>
            <Loader color={COLORS.HEADER_BACKGROUND} />
        </CenteredContainer>
    );
};

export default LoadingPage;