import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

import {COLORS} from '../../StyleConstants';
import NavigationFactory from '../../ux/NavigationFactory';
import type {LinkType} from '../../ux/NavigationFactory';

const Container = styled.div`
    background: linear-gradient(145deg, rgba(210,210,210,1) 0%, rgba(244,244,244,1) 100%);
    display: flex;
    flex: 1;
`;

const Centered = styled.div`
    margin: auto;
    width: 100%;
    height: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Arial;
`;

const Name = styled.div`
    letter-spacing: 20px;
    font-size: 45px;
    font-weight: 700;
    color: ${COLORS.BASE_TEXT};
`;

const Profession = styled.div`
    letter-spacing: 8px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;
    color: ${COLORS.BASE_TEXT};
`;

const Nav = styled.nav`
    display: flex;
    margin-top: 2%;
    gap: 10px;
`;

const ButtonLink = styled(Link)`
    background-color: ${COLORS.HEADER_BACKGROUND};
    border: 4px solid ${COLORS.HEADER_BORDER};
    transition: background-color .5s ease-in-out;
    width: 100px;
    text-align: center;
    padding: 5px;
    font-size: 14px;

    &, &:visited {
        color: ${COLORS.HEADER_TEXT};
        text-decoration: none;
    }

    &:hover {
        background-color: ${COLORS.INTRO_MENU_HOVERED};
        transition: background-color 0s ease-in-out;
    }
`;

class IntroPage extends React.Component<{}, {}> {
    showLinks() {
        const links = NavigationFactory.getSectionLinks();
        return links.map((link: LinkType) => {
            return <ButtonLink key={link.href} to={link.href}>{link.text}</ButtonLink>;
        });
    }

    render() {
        return <Container>
            <Centered>
                <Name>JACEK TOPOLSKI</Name>
                <Profession>SOFTWARE DEVELOPER</Profession>
                <Nav>
                    {
                        this.showLinks()
                    }
                </Nav>
            </Centered>
        </Container>;
    }
}

export default IntroPage;