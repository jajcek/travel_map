import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background-color: #383838;
    border-top: 2px solid #ccc;
    color: #f4f4f4;
    font-size: 10px;
    text-align: center;
`;

class Footer extends React.Component<{}, {}> {
    render() {
      return <Container>Copyright © 2015-2022 Jacek Topolski. All rights reserved. Powered by ReactJS.</Container>;
    }
}

export default Footer;