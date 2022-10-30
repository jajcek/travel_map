import React from 'react';
import styled from 'styled-components';

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

const ViewDetails = styled.div`
    flex: 1;
    display: flex;
    cursor: pointer;
    background-color: #ccc;
    opacity: 0;
    transition: opacity .3s;

    &:hover {
        opacity: .9;
    }

    div {
        margin: auto;
    }
`;

const Description = styled.div`
    background-color: #ccc;
    opacity: .9;
    font-size: 9px;
    line-height: 16px;
    padding: 4px 0;
`;

const Text = styled.div<{size: string}>`
    font-size: ${props => props.size}px;
`;

type Props = {
    image: string,
    name: string,
    tech: string
}

class WorkItem extends React.Component<Props, {}> {
    render() {
        return (
            <Container image={this.props.image}>
                <ViewDetails><div>View details</div></ViewDetails>
                <Description>
                    <Text size="12">{this.props.name}</Text>
                    <Text size="9">{this.props.tech}</Text>
                </Description>
            </Container>
        );
    }
}

export default WorkItem;