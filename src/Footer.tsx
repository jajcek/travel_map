import React from 'react';
import styled from 'styled-components'

import {COLORS} from './CommonStyles';

const Container = styled.div`
    background-color: ${COLORS.HEADER_BACKGROUND};
    border-top: 2px solid ${COLORS.HEADER_BORDER};
    color: ${COLORS.MAIN_BACKGROUND};
    font-size: 10px;
    text-align: center;
`;

class Footer extends React.Component<{}, {}> {
    render() {
      return <Container>{`Copyright © 2015-${new Date().getFullYear()} Jacek Topolski. All rights reserved. Powered by ReactJS.`}</Container>;
    }
}

export default Footer;