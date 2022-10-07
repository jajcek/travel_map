import React from 'react';

import styled from 'styled-components'

interface ChildrenProps {
    children: JSX.Element | null;
    name: String
}

const Title = styled.h1`
    text-align: center;
`;

class PropertyBox extends React.Component<ChildrenProps, any> {
  render() {
    return <React.Fragment>
            <Title>{this.props.name}</Title>
            {this.props.children}
        </React.Fragment>;
  }
}

export default PropertyBox;
