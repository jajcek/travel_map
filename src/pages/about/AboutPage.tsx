/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import styled from 'styled-components'

import {Container, Link} from '../../CommonStyles';
import ExperienceTable from './ExperienceTable';

import PolishLanguage from './language_images/pl.png';
import EnglishLanguage from './language_images/en.png';

const SectionTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 10px;
`;

const Countries = styled.div`
    display: flex;
`;

const Country = styled.div`
    display: flex;
    margin-right: 30px;
`;

const LanguageLevel = styled.div`
    margin: auto 5px;
`;

type Props = {
    onLoad: () => void
};

const AboutPage = (props: Props) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    return (
        <Container>
            <p>
                I have been developing software professionally for 10 years by using various technologies
                in areas like frontend, backend or pure desktop applications. However, I got into these topics when I was 15 and
                since then I have been experimenting with other areas like mobile technologies (Android), game development (DirectX), compilers (Flex&Bison).
                Today my main technology stack stays around Java and JavaScript letting me become a full stack developer.
                I have experience with e.g. Spring, ReactJS, PostgreSQL, BigQuery, AWS.
                Apart from programming I played a lot with graphics, especially 3D in 3Ds Max / Blender.
            </p>
            <SectionTitle>Education</SectionTitle>
            <p>
                In 2013 I have graduated engineer's degree at Wrocław University of Technology in Computer Science at PPT faculty
                with the thesis: "Automating and scheduling work in a system"
                which can be found <Link target="_blank" href="https://drive.google.com/open?id=0B7x6g4c3-UJfQzZtTXU1M1NMRDg">here</Link> (in polish).
                In 2015 I have graduated master's degree with the thesis: "Dynamic generation of an infinite area in virtual 3D space" which
                is <Link target="_blank" href="https://drive.google.com/open?id=0B7x6g4c3-UJfV2NwbkE0MVhPY1E">here</Link> (in english).
                At the studies I have won a compiler contest which required students to implement a compiler (using Flex & Bison)
                for a toy-language (given by the lecturer) that produces the "fastest" bytecode.
            </p>
            <SectionTitle>Languages</SectionTitle>
            <Countries>
                <Country>
                    <img alt="Polish" src={PolishLanguage} />
                    <LanguageLevel>Native</LanguageLevel>
                </Country>
                <Country>
                    <img alt="English" src={EnglishLanguage} />
                    <LanguageLevel>Proficient</LanguageLevel>
                </Country>
            </Countries>
            <SectionTitle>Hobbies</SectionTitle>
            <p>
                I have been doing sport rock climbing for 5 years and from time to time I take it as seriously as software engineering.
                I am also a certified scuba diver and have dived in several places.
                Recently I've started travelling more and more and that was the reason for creating my own private project available in the Travel menu.
            </p>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceTable />
        </Container>
    );
};

export default AboutPage;