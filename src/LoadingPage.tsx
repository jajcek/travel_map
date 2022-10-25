import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin: auto;
    height: 30%;
`;

class LoadingPage extends React.Component<{}, {}> {
    render() {
      return <Container>Loading...</Container>;
    }
}

export default LoadingPage;