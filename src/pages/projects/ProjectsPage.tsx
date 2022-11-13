import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {Container} from '../../CommonStyles';
import ProjectMenuItem from './ProjectMenuItem';
import ProjectNavigationFactory from './ProjectsNavigationFactory';

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;

    > div {
        margin: 5px;
    }
`;

type Props = {
    onItemClick: (href: string) => void
    onLoad: () => void
};

const ProjectsPage = (props: Props) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    return (
        <Container>
            <h2>Software development</h2>
            <p>Below you can find some programs I have created. Smaller, bigger, prototypes.</p>
            <ItemsContainer>
                {
                    ProjectNavigationFactory.getSoftwareProjects().map((p) => {
                        return <ProjectMenuItem key={p.href} onClick={props.onItemClick} projectRef={p.href} image={p.image} name={p.name} tech={p.tech} />;
                    })
                }
            </ItemsContainer>

            <h2>3D graphics</h2>
            <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
            <ItemsContainer>
                {
                    ProjectNavigationFactory.get3DProjects().map((p) => {
                        return <ProjectMenuItem key={p.href} onClick={props.onItemClick} projectRef={p.href} image={p.image} name={p.name} tech={p.tech} />;
                    })
                }
            </ItemsContainer>
        </Container>
    );
};

export default ProjectsPage;