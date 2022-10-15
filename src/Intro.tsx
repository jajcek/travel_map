import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
    background-color: #f4f4f4;
    height: 100%;
    display: flex;
`;

const Centered = styled.div`
    margin: auto;
    width: 100%;
    height: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    letter-spacing: 20px;
    font-size: 45px;
    font-weight: 700;
`;

const Profesion = styled.div`
    letter-spacing: 8px;
    font-size: 13px;
    font-weight: 700;
`;

const fontColor = '#f4f4f4';

const Nav = styled.nav`
    display: flex;
    margin-top: 2%;
    gap: 10px;
`;

const ButtonLink = styled(Link)`
    background-color: #383838;
    border: 4px solid #ccc;
    transition: background-color .5s ease-in-out;
    width: 100px;
    text-align: center;
    padding: 5px;
    font-size: 14px;

    &, &:visited {
        color: ${fontColor};
        text-decoration: none;
    }

    &:hover {
        background-color: #686868;
        transition: background-color 0s ease-in-out;
    }
`;

class Intro extends React.Component<{}, {}> {
    render() {
        return <Container>
            <Centered>
                <Name>JACEK TOPOLSKI</Name>
                <Profesion>SOFTWARE DEVELOPER</Profesion>
                <Nav>
                    <ButtonLink to={'/travel'}>About</ButtonLink>
                    <ButtonLink to={'/work'}>Work</ButtonLink>
                    <ButtonLink to={'/contact'}>Contact</ButtonLink>
                </Nav>
            </Centered>
        </Container>;
    }
}

export default Intro;