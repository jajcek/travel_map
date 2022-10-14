import React from 'react';
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  background-color: #383838;
  color: #f4f4f4;
  border-bottom: 4px solid #ccc;
  padding: 15px;
`;

const Author = styled.div`
  flex: 1 0 auto;
  padding-left: 20%;
`;

const Nav = styled.nav`
  display: flex;
  background-color: #383838;
  color: #f4f4f4;
  padding-right: 20%;
`;

const NavItem = styled.a`
  padding-left: 25px;
`;

class Header extends React.Component<{}, {}> {
  render() {
    return <Container>
      <Author>Jacek Topolski</Author>
      <Nav>
        <NavItem>About</NavItem>
        <NavItem>Work</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </Container>;
  }
}

export default Header;