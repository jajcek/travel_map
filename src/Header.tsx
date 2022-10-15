import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const fontColor = '#f4f4f4';

const Container = styled.header`
    display: flex;
    background-color: #383838;
    color: #f4f4f4;
    border-bottom: 4px solid #ccc;
    padding: 15px;
`;

const AuthorLink = styled(Link)`
    flex: 1 0 auto;
    padding-left: 20%;

    &, &:visited {
        color: ${fontColor};
        text-decoration: none;
    }
`;

const Nav = styled.nav`
    display: flex;
    background-color: #383838;
    color: ${fontColor};
    padding-right: 20%;
`;

const AnimatedLink = styled(Link)`
    padding-left: 25px;

    &, &:visited {
        color: ${fontColor};
        text-decoration: none;
    }
`;

class Header extends React.Component<{}, {}> {
  render() {
    return <Container>
      <AuthorLink to={'/'}>Jacek Topolski</AuthorLink>
      <Nav>
        <AnimatedLink to={'/travel'}>About</AnimatedLink>
        <AnimatedLink to={'/work'}>Work</AnimatedLink>
        <AnimatedLink to={'/contact'}>Contact</AnimatedLink>
      </Nav>
    </Container>;
  }
}

export default Header;