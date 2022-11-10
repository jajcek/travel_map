import React from 'react';

import {COLORS} from '../CommonStyles';
import Loader from './Loader';
import CenteredContainer from '../ux/CenteredContainer';

class LoadingPage extends React.Component<{}, {}> {
    render() {
        return (
            <CenteredContainer>
                <Loader color={COLORS.HEADER_BACKGROUND} />
            </CenteredContainer>
        );
    }
}

export default LoadingPage;