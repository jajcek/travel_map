import React from 'react';
import styled from 'styled-components'
import {useLocation} from "react-router-dom";

import {COLORS} from './CommonStyles';
import NavigationFactory from './ux/NavigationFactory';
import type {LinkType} from './ux/NavigationFactory';

const Container = styled.header`
    display: flex;
    border-bottom: 4px solid ${COLORS.HEADER_BORDER};
`;

const HomeNav = styled.nav`
    display: flex;
    flex: 1 0 auto;
    background-color: ${COLORS.HEADER_BACKGROUND};
    color: ${COLORS.HEADER_TEXT};
    padding-left: 20%;
`;

const AuthorLink = styled.div`
    padding: 17px;
    cursor: pointer;

    &, &:visited {
        color: ${COLORS.HEADER_TEXT};
        text-decoration: none;
    }
`;

const SectionNav = styled.nav`
    display: flex;
    background-color: ${COLORS.HEADER_BACKGROUND};
    color: ${COLORS.HEADER_TEXT};
    padding-right: 20%;
`;

const AnimatedLink = styled.div`
    padding: 17px;
    z-index: 0;
    position: relative;
    cursor: pointer;

    &, &:visited {
        color: ${COLORS.HEADER_TEXT};
        text-decoration: none;
        transition: color .4s;
    }

    &:hover {
        color: ${COLORS.HEADER_HOVERED_TEXT};

        &::before {
            height: 100%;
            transition: height .4s
        }
    }

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${COLORS.HEADER_HOVERED_BACKGROUND};
        z-index: -1;
        transition: height .4s
    }

    &.selected {
        color: ${COLORS.HEADER_HOVERED_TEXT};
        &::before {
            height: 100%;
        }
    }
`;

type Props = {
    clickHandler: (href: string) => void
};

const Header = (props: Props) => {
    const location = useLocation();

    function showHomeLink() {
        const homeLink = NavigationFactory.getHomeLink();
        return <AuthorLink onClick={() => props.clickHandler(homeLink.href)}>{homeLink.text}</AuthorLink>;
    }

    function showLinks() {
        const links = NavigationFactory.getSectionLinks();
        return links.map((link: LinkType) => {
            return <AnimatedLink className={isSelected(link) ? 'selected' : ''} key={link.href} onClick={() => props.clickHandler(link.href)}>
                {link.text}
            </AnimatedLink>;
        });
    }

    function isSelected(link: LinkType) {
        if (link.href === '/projects' && location.pathname.includes('projects')) {
            return true;
        }
        return location.pathname === link.href;
    }

    return (
        <Container>
            <HomeNav>
                {
                    showHomeLink()
                }
            </HomeNav>
            <SectionNav>
                {
                    showLinks()
                }
            </SectionNav>
        </Container>
    );
};

export default Header;