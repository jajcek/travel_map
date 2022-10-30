import React from 'react';
import styled from 'styled-components'

import {COLORS} from '../../StyleConstants';
import ExperienceTable from './ExperienceTable';

const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    display: flex;
    flex: 1;
`;

const Centered = styled.div`
    margin: 50px auto;
    width: 800px;
    align-items: center;
    text-align: justify;
`;

const Section = styled.div`
    text-indent: 2em;
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

class AboutPage extends React.Component<{}, {}> {
    render() {
        return (
        <Container>
            <Centered>
                <Section>
                    I have developed software professionally for 10 years by using various technologies
                    in areas like frontend, backend or pure desktop applications. However, I got into these topics when I was 15 and
                    since then I have been experimenting with other areas like mobile technologies (Android), game development (DirectX), compilers (Flex&Bison).
                    Today, my main technology stack stays around Java and JavaScript letting me become a full stack developer.
                    I have experience with e.g. Spring, ReactJS, PostgreSQL, BigQuery, AWS.
                    Apart from programming I played a lot with graphics, especially 3D in 3Ds Max / Blender.
                </Section>
                <h3>Education</h3>
                <Section>
                    In 2013 I have graduated BSc from Wrocław University of Technology in Computer Science at PPT faculty with the thesis:
                    "Automating and scheduling work in a system" which can be found <a href="https://drive.google.com/open?id=0B7x6g4c3-UJfQzZtTXU1M1NMRDg">here</a> (in polish).
                    In 2015 I have graduated MSc with the thesis: "Dynamic generation of an infinite area in virtual 3D space" which
                    is <a href="https://drive.google.com/open?id=0B7x6g4c3-UJfV2NwbkE0MVhPY1E">here</a> (in english).
                    At the studies I have won a compiler contest which required students to implement a compiler (using Flex & Bison)
                    for a toy-language (given by the lecturer) that produces the "fastest" bytecode.
                </Section>
                <h3>Languages</h3>
                <Countries>
                    <Country>
                        <img alt="Polish" src="pl.png" />
                        <LanguageLevel>Native</LanguageLevel>
                    </Country>
                    <Country>
                        <img alt="English" src="en.png" />
                        <LanguageLevel>Professional proficiency</LanguageLevel>
                    </Country>
                </Countries>
                <h3>Hobbies</h3>
                <Section>
                    I have been doing sport rock climbing for 5 years and from time to time I take it as seriously as software engineering.
                    I am also a certified scuba diver and have dived in several places like Egypt, Spain, Croatia, Thailand, Cyprus.
                    Recently I've started travelling more and more and that was the reason for creating my own private project available in the Travel menu.
                </Section>
                <h3>Experience</h3>
                <ExperienceTable />
            </Centered>
            </Container>);
    }
}

export default AboutPage;