import React from 'react';
import styled from 'styled-components'

import {COLORS} from '../../StyleConstants';
import ExperienceTable from './ExperienceTable';

import PolishLanguage from './language_images/pl.png';
import EnglishLanguage from './language_images/en.png';

const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    line-height: 30px;
    margin: 50px auto;
    width: 800px;
    align-items: center;
    text-align: justify;
`;

const SectionTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 10px;
`;

const Section = styled.div`
    color: ${COLORS.BASE_TEXT};
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

const TextLink = styled.a`
    &, &:visited {
        color: ${COLORS.BASE_TEXT};
    }
`;

class AboutPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Section>
                    I have developed software professionally for 10 years by using various technologies
                    in areas like frontend, backend or pure desktop applications. However, I got into these topics when I was 15 and
                    since then I have been experimenting with other areas like mobile technologies (Android), game development (DirectX), compilers (Flex&Bison).
                    Today my main technology stack stays around Java and JavaScript letting me become a full stack developer.
                    I have experience with e.g. Spring, ReactJS, PostgreSQL, BigQuery, AWS.
                    Apart from programming I played a lot with graphics, especially 3D in 3Ds Max / Blender.
                </Section>
                <SectionTitle>Education</SectionTitle>
                <Section>
                    In 2013 I have graduated engineer's degree at Wrocław University of Technology in Computer Science at PPT faculty
                    with the thesis: "Automating and scheduling work in a system"
                    which can be found <TextLink target="_blank" href="https://drive.google.com/open?id=0B7x6g4c3-UJfQzZtTXU1M1NMRDg">here</TextLink> (in polish).
                    In 2015 I have graduated master's degree with the thesis: "Dynamic generation of an infinite area in virtual 3D space" which
                    is <TextLink target="_blank" href="https://drive.google.com/open?id=0B7x6g4c3-UJfV2NwbkE0MVhPY1E">here</TextLink> (in english).
                    At the studies I have won a compiler contest which required students to implement a compiler (using Flex & Bison)
                    for a toy-language (given by the lecturer) that produces the "fastest" bytecode.
                </Section>
                <SectionTitle>Languages</SectionTitle>
                <Countries>
                    <Country>
                        <img alt="Polish" src={PolishLanguage} />
                        <LanguageLevel>Native</LanguageLevel>
                    </Country>
                    <Country>
                        <img alt="English" src={EnglishLanguage} />
                        <LanguageLevel>Professional proficiency</LanguageLevel>
                    </Country>
                </Countries>
                <SectionTitle>Hobbies</SectionTitle>
                <Section>
                    I have been doing sport rock climbing for 5 years and from time to time I take it as seriously as software engineering.
                    I am also a certified scuba diver and have dived in several places like Egypt, Spain, Croatia, Thailand, Cyprus.
                    Recently I've started travelling more and more and that was the reason for creating my own private project available in the Travel menu.
                </Section>
                <SectionTitle>Experience</SectionTitle>
                <ExperienceTable />
            </Container>
        );
    }
}

export default AboutPage;