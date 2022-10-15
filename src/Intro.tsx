import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background-color: #f4f4f4;
    height: 100%;
    display: flex;
`;

const Centered = styled.div`
    margin: auto;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`

`;

const Profesion = styled.div`

`;

class Intro extends React.Component<{}, {}> {
    render() {
        return <Container>
            <Centered>
                <Name>JACEK TOPOLSKI</Name>
                <Profesion>SOFTWARE DEVELOPER</Profesion>
            </Centered>
        </Container>;
    }
}

export default Intro;