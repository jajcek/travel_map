import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../StyleConstants';
import WorkItem from './WorkItem';

const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    color: ${COLORS.BASE_TEXT};
    display: flex;
    flex: 1;
    line-height: 30px;
`;

const Centered = styled.div`
    margin: 50px auto;
    width: 800px;
    align-items: center;
    text-align: center;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;

    > div {
        margin: 5px;
    }
`;

class WorkPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Centered>
                    <h2>Software development</h2>
                    <p>Below you can find some programs I have created. Smaller and bigger.</p>
                    <ItemsContainer>
                        <WorkItem id="infinite_terrain" image="work_assets/infinite_terrain/thumbnail.png" name="Infinite 3D terrain" tech="C++/DirectX 11/HLSL" />
                        <WorkItem id="do_for_me" image="work_assets/do_for_me/thumbnail.png" name="DoForMe!" tech="C++/Qt/Lua" />
                        <WorkItem id="infinite_terrain" image="work_assets/txt_alignment/thumbnail.png" name="Text alignment" tech="C" />
                        <WorkItem id="infinite_terrain" image="work_assets/image_processing/thumbnail.png" name="Image processing" tech="C++/WinAPI" />
                        <WorkItem id="infinite_terrain" image="work_assets/traffic_sim/thumbnail.png" name="Traffic simulator" tech="C++/Qt" />
                        <WorkItem id="infinite_terrain" image="work_assets/heartlight/thumbnail.png" name="Heartlight" tech="Java ME" />
                        <WorkItem id="infinite_terrain" image="work_assets/profi_website/thumbnail.png" name="Profi's website" tech="Php/MySQL/JS" />
                        <WorkItem id="infinite_terrain" image="work_assets/virtual_school/thumbnail.jpg" name="Virtual school" tech="C++" />
                    </ItemsContainer>

                    <h2>3D graphics</h2>
                    <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
                </Centered>
            </Container>
        );
    }
}

export default WorkPage;