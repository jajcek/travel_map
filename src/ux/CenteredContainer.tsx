import React from "react";
import styled from 'styled-components';

import {COLORS} from '../CommonStyles';

const Container = styled.div<{background?: string}>`
    display: flex;
    height: 100%;
    ${props => props.background ? `background: ${props.background}` : 'none'}
`;

const Centered = styled.div`
    margin: auto;
    width: 100%;
    height: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${COLORS.BASE_TEXT};
`;

type Props = {
    children: Array<JSX.Element> | JSX.Element,
    background?: string
};

const CenteredContainer = (props: Props) => {
    return (
        <Container background={props.background}>
            <Centered>
                {props.children}
            </Centered>
        </Container>
    );
};

export default CenteredContainer;