/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import styled from 'styled-components'
import ContactForm from './ContactForm';

import {Container, Link, Text} from '../../CommonStyles';

import MailIcon from './assets/mail.png';
import FbIcon from './assets/fb.png';
import LinkedInIcon from './assets/linkedin.png';

const IMAGE_SIZE = 40;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const IconItem = styled.div`
    display: flex;
    align-items: center;

    img {
        opacity: .8;
        transition: opacity .5s ease-in-out;

        &:hover {
            opacity: .5;
            transition: opacity .0s;
        }
    }

    span {
        margin-left: 10px;
    }
`;

const CenterDiv = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 50px;

    div {
        flex: 1;
    }
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
            <h2>Contact</h2>

            <CenterDiv>
                <div>
                    <Text size="14">
                        If you'd like to get in touch let me know through one of the following channels.
                        I will happily hear about your offers, also in foreign countries or full remote work.
                    </Text>
                    <Icons>
                        <IconItem>
                            <Link href="mailto:jajcek.30@gmail.com"><img alt="Mail: jajcek.30@gmail.com" width={IMAGE_SIZE} height={IMAGE_SIZE} src={MailIcon}/></Link>
                            <span>JAJCEK.30@GMAIL.COM</span>
                        </IconItem>
                        <IconItem>
                            <Link href="https://www.facebook.com/jacek.tt"><img alt="Facebook" width={IMAGE_SIZE} height={IMAGE_SIZE} src={FbIcon}/></Link>
                            <span>FACEBOOK.COM/JACEK.TT</span>
                        </IconItem>
                        <IconItem>
                            <Link href="https://www.linkedin.com/in/jtopolski90"><img alt="LinkedIn" width={IMAGE_SIZE} height={IMAGE_SIZE} src={LinkedInIcon}/></Link>
                            <span>LINKEDIN.COM/IN/JTOPOLSKI90</span>
                        </IconItem>
                    </Icons>
                </div>
                <div>
                    <ContactForm />
                </div>
            </CenterDiv>
        </Container>
    );
};

export default AboutPage;