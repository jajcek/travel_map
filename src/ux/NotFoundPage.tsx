import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {Text} from '../CommonStyles';
import CenteredContainer from '../ux/CenteredContainer';

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
        <CenteredContainer>
            <Text size="25">This page does not exist.</Text>
            <br/>
            <Text size="25">You will be redirected to the intro page in few seconds.</Text>
        </CenteredContainer>
    );
};

export default NotFoundPage;