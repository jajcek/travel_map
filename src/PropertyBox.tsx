import React from 'react';

interface ChildrenProps {
    children: JSX.Element | null;
}

class PropertyBox extends React.Component<ChildrenProps, any> {
  render() {
    return <div>property boxik{this.props.children}</div>;
  }
}

export default PropertyBox;
