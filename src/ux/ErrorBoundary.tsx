import React, {ErrorInfo, ReactNode} from 'react';
import styled from 'styled-components';

import CenteredContainer from '../ux/CenteredContainer';

type Props = {
    children: ReactNode
};

type State = {
    hasError: boolean
};

const SadFace = styled.div`
    transform: rotate(90deg);
    font-size: 100px;
`;

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <CenteredContainer>
                    <SadFace>:(</SadFace>
                    <h1>Something went wrong. Please, check your connection.</h1>
                    <h2>If the problem persists, please contact me.</h2>
                </CenteredContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;