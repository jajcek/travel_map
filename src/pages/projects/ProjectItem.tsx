import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {COLORS, Text} from '../../CommonStyles';

const Container = styled.div<{image: string}>`
    background-image: url(${props => props.image});
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

const ViewDetails = styled(Link)`
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

const Description = styled.div`
    background-color: ${COLORS.PROJECT_ITEM_BACKGROUND};
    opacity: .9;
    font-size: 9px;
    line-height: 16px;
    padding: 4px 0;
    text-align: center;
`;

type Props = {
    workRef: string,
    image: string,
    name: string,
    tech: string
}

class ProjectItem extends React.Component<Props, {}> {
    render() {
        return (
            <Container image={this.props.image}>
                <ViewDetails to={this.props.workRef}><div>View details</div></ViewDetails>
                <Description>
                    <Text size="12">{this.props.name}</Text>
                    <Text size="9">{this.props.tech}</Text>
                </Description>
            </Container>
        );
    }
}

export default ProjectItem;