import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../StyleConstants';

const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    color: ${COLORS.BASE_TEXT};
    display: flex;
    flex: 1;
    line-height: 30px;
`;

const Centered = styled.div`
    margin: 50px auto;
    width: 800px;
    align-items: center;
    text-align: center;
`;

class WorkPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Centered>
                    <h2>Software development</h2>
                    <p>Below you can find some programs I have created. Smaller and bigger.</p>
                    <h2>3D graphics</h2>
                    <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
                </Centered>
            </Container>
        );
    }
}

export default WorkPage;