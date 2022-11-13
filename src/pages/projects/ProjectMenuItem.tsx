import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import {COLORS, Text} from '../../CommonStyles';
import Loader from '../../ux/Loader';

const Container = styled.div<{image: string | undefined}>`
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
    background-size: 150px 150px;
    background-position: center;
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    transition: background-size .3s;

    &:hover {
        background-size: 180px 180px;
    }
`;

const ViewDetails = styled.div`
    flex: 1;
    display: flex;
    cursor: pointer;
    background-color: ${COLORS.PROJECT_ITEM_BACKGROUND};
    opacity: 0;
    transition: opacity .3s;

    &:hover {
        opacity: .9;
    }

    &, &:visited {
        color: ${COLORS.BASE_TEXT};
        text-decoration: none;
    }

    div {
        margin: auto;
    }
`;

const ViewDetailsLoading = styled.div`
    flex: 1;
    display: flex;
    cursor: pointer;

    div {
        margin: auto;
    }
`;

const Description = styled.div`
    background-color: ${COLORS.PROJECT_ITEM_BACKGROUND};
    opacity: .9;
    font-size: 9px;
    line-height: 16px;
    padding: 4px 0;
    text-align: center;
`;

type Props = {
    onClick: (href: string) => void,
    projectRef: string,
    image: string,
    name: string,
    tech: string
}

const ProjectMenuItem = (props: Props) => {
    const [image, setImage] = useState<string>();

    useEffect(() => {
        const {image} = props;
        const imageLoader = new Image();
        imageLoader.src = image;
        imageLoader.onload = () => {
            setImage(image);
        };
    });

    function showDetails() {
        if (image) {
            return <ViewDetails onClick={() => props.onClick('projects/' + props.projectRef)}><div>View details</div></ViewDetails>;
        } else {
            return <ViewDetailsLoading onClick={() => props.onClick('projects/' + props.projectRef)}><Loader color={COLORS.PROJECT_ITEM_BACKGROUND}/></ViewDetailsLoading>;
        }
    }

    return (
        <Container image={image}>
            {showDetails()}
            <Description>
                <Text size="12">{props.name}</Text>
                <Text size="9">{props.tech}</Text>
            </Description>
        </Container>
    );
};

export default ProjectMenuItem;