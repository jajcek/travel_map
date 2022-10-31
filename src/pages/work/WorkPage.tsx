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
                        <WorkItem id="infinite_terrain" image="work_assets/sw/infinite_terrain/thumbnail.png" name="Infinite 3D terrain" tech="C++/DirectX 11/HLSL" />
                        <WorkItem id="do_for_me" image="work_assets/sw/do_for_me/thumbnail.png" name="DoForMe!" tech="C++/Qt/Lua" />
                        <WorkItem id="txt_alignment" image="work_assets/sw/txt_alignment/thumbnail.png" name="Text alignment" tech="C" />
                        <WorkItem id="image_processing" image="work_assets/sw/image_processing/thumbnail.png" name="Image processing" tech="C++/WinAPI" />
                        <WorkItem id="traffic_sim" image="work_assets/sw/traffic_sim/thumbnail.png" name="Traffic simulator" tech="C++/Qt" />
                        <WorkItem id="heartlight" image="work_assets/sw/heartlight/thumbnail.png" name="Heartlight" tech="Java ME" />
                        <WorkItem id="profi_website" image="work_assets/sw/profi_website/thumbnail.png" name="Profi's website" tech="Php/MySQL/JS" />
                        <WorkItem id="virtual_school" image="work_assets/sw/virtual_school/thumbnail.jpg" name="Virtual school" tech="C++" />
                        <WorkItem id="map_editor" image="work_assets/sw/map_editor/thumbnail.jpg" name="3D map editor" tech="C++/DirectX 11/HLSL" />
                        <WorkItem id="random_select" image="work_assets/sw/random_select/thumbnail.png" name="Random select algorithm" tech="Java SE" />
                        <WorkItem id="select" image="work_assets/sw/select/thumbnail.png" name="Select algorithm" tech="Java SE" />
                        <WorkItem id="diet_selector" image="work_assets/sw/diet_selector/thumbnail.png" name="Diet selector - AHP" tech="Python 2.7" />
                        <WorkItem id="communicator" image="work_assets/sw/communicator/thumbnail.png" name="Internet communicator" tech="Java SE" />
                        <WorkItem id="paint_multiplayer" image="work_assets/sw/paint_multiplayer/thumbnail.png" name="Paint multiplayer" tech="Java SE/GWT" />
                        <WorkItem id="leapmotion_paint" image="work_assets/sw/leapmotion_paint/thumbnail.png" name="LeapMotion paint" tech="Java/Leap Motion SDK" />
                    </ItemsContainer>

                    <h2>3D graphics</h2>
                    <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
                    <ItemsContainer>
                        <WorkItem id="my_room" image="work_assets/3d/my_room/thumbnail.jpg" name="My room in 3D" tech="3ds Max 2009/VRay" />
                        <WorkItem id="students_house" image="work_assets/3d/students_house/thumbnail.jpg" name="Student's house" tech="3ds Max 2009/VRay" />
                        <WorkItem id="classroom" image="work_assets/3d/classroom/thumbnail.jpg" name="Classroom" tech="3ds Max 2009/VRay" />
                        <WorkItem id="knightly_room" image="work_assets/3d/knightly_room/thumbnail.jpg" name="'Knightly room'" tech="3ds Max 2011/VRay" />
                    </ItemsContainer>
                </Centered>
            </Container>
        );
    }
}

export default WorkPage;