/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components'

import {COLORS, MOBILE_WIDTH} from '../../CommonStyles';
import NavigationFactory from '../../ux/NavigationFactory';
import type {LinkType} from '../../ux/NavigationFactory';
import CenteredContainer from '../../ux/CenteredContainer';

const Name = styled.div`
    letter-spacing: 20px;
    @media (max-width: ${MOBILE_WIDTH}) {
        letter-spacing: 5px;
    }
    font-size: 45px;
    font-weight: 700;
    font-family: Arial;
    color: ${COLORS.BASE_TEXT};
`;

const Profession = styled.div`
    letter-spacing: 8px;
    @media (max-width: ${MOBILE_WIDTH}) {
        letter-spacing: 2px;
    }
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;
    font-family: Arial;
    color: ${COLORS.BASE_TEXT};
`;

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;
`;

const ButtonLink = styled.div`
    background-color: ${COLORS.HEADER_BACKGROUND};
    border: 4px solid ${COLORS.HEADER_BORDER};
    transition: background-color .5s ease-in-out;
    width: 100px;
    text-align: center;
    padding: 5px;
    font-family: Arial;
    font-size: 14px;
    cursor: pointer;

    &, &:visited {
        color: ${COLORS.HEADER_TEXT};
        text-decoration: none;
    }

    &:hover {
        background-color: ${COLORS.INTRO_MENU_HOVERED};
        transition: background-color 0s ease-in-out;
    }
`;

type Props = {
    menuClick: (href: string) => void,
    onLoad: () => void
};

const IntroPage = (props: Props) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    function showLinks() {
        const links = NavigationFactory.getSectionLinks();
        return links.map((link: LinkType) => {
            return <ButtonLink key={link.href} onClick={() => props.menuClick(link.href)}>{link.text}</ButtonLink>;
        });
    }

    return (
        <CenteredContainer background={COLORS.INTRO_BACKGROUND}>
            <Name>JACEK TOPOLSKI</Name>
            <Profession>SOFTWARE DEVELOPER</Profession>
            <Nav>
                {
                    showLinks()
                }
            </Nav>
        </CenteredContainer>
    );
};

export default IntroPage;