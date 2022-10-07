import React from 'react';

import styled from 'styled-components'

interface Props {
    name: String
}

const Title = styled.h2`
    text-align: center;
`;

class CountryPropertyBox extends React.Component<Props, any> {
  render() {
    return <React.Fragment>
            <Title>{this.props.name}</Title>
        </React.Fragment>;
  }
}

export default CountryPropertyBox;
