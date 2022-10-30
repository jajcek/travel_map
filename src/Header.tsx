import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

import {COLORS} from './StyleConstants';
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

const AuthorLink = styled(Link)`
    padding: 17px;

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

const AnimatedLink = styled(Link)`
    padding: 17px;
    z-index: 0;
    position: relative;

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
`;

class Header extends React.Component<{}, {}> {
    showHomeLink() {
        const homeLink = NavigationFactory.getHomeLink();
        return <AuthorLink to={homeLink.href}>{homeLink.text}</AuthorLink>;
    }

    showLinks() {
        const links = NavigationFactory.getSectionLinks();
        return links.map((link: LinkType) => {
            return <AnimatedLink key={link.href} to={link.href}>{link.text}</AnimatedLink>;
        });
    }

    render() {
        return (
            <Container>
            <HomeNav>
                {
                    this.showHomeLink()
                }
            </HomeNav>
            <SectionNav>
                {
                    this.showLinks()
                }
            </SectionNav>
            </Container>
        );
    }
}

export default Header;