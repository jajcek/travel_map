import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';

import {COLORS, Text} from '../CommonStyles';

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Centered = styled.div`
    margin: auto;
    width: 100%;
    height: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${COLORS.BASE_TEXT};
`;

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(intervalId);
        }
    });

    return (
        <Container>
            <Centered>
                <Text size="25">This page does not exist.</Text>
                <br/>
                <Text size="25">You will be redirected to the intro page in few seconds.</Text>
            </Centered>
        </Container>
    );
};

export default NotFoundPage;