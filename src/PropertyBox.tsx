import React from 'react';

interface ChildrenProps {
    children: JSX.Element | null;
}

class PropertyBox extends React.Component<ChildrenProps, any> {
  render() {
    return <React.Fragment>property boxik{this.props.children}</React.Fragment>;
  }
}

export default PropertyBox;
