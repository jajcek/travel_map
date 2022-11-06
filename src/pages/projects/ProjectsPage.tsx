import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../StyleConstants';
import ProjectItem from './ProjectItem';

import InfiniteTerrainThumbnail from './sw/infinite_terrain/thumbnail.png';
import DoForMeThumbnail from './sw/do_for_me/thumbnail.png';
import TxtAlignmentThumbnail from './sw/txt_alignment/thumbnail.png';
import ImageProcessingThumbnail from './sw/image_processing/thumbnail.png';
import TrafficSimThumbnail from './sw/traffic_sim/thumbnail.png';
import HeartlightThumbnail from './sw/heartlight/thumbnail.png';
import ProfiWebsiteThumbnail from './sw/profi_website/thumbnail.png';
import VirtualSchoolThumbnail from './sw/virtual_school/thumbnail.jpg';
import MapEditorThumbnail from './sw/map_editor/thumbnail.jpg';
import RandomSelectThumbnail from './sw/random_select/thumbnail.png';
import SelectThumbnail from './sw/select/thumbnail.png';
import DietSelectorThumbnail from './sw/diet_selector/thumbnail.png';
import CommunicatorThumbnail from './sw/communicator/thumbnail.png';
import PaintMultiplayerThumbnail from './sw/paint_multiplayer/thumbnail.png';
import LeapMotionThumbnail from './sw/leapmotion_paint/thumbnail.png';

import MyRoomThumbnail from './3d/my_room/thumbnail.jpg';
import StudentsHouseThumbnail from './3d/students_house/thumbnail.jpg';
import ClassroomThumbnail from './3d/classroom/thumbnail.jpg';
import KnightlyRoomThumbnail from './3d/knightly_room/thumbnail.jpg';

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

class ProjectsPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <Centered>
                    <h2>Software development</h2>
                    <p>Below you can find some programs I have created. Smaller, bigger, prototypes.</p>
                    <ItemsContainer>
                        <ProjectItem workRef="sw/infinite_terrain" image={InfiniteTerrainThumbnail} name="Infinite 3D terrain" tech="C++/DirectX 11/HLSL" />
                        <ProjectItem workRef="sw/do_for_me" image={DoForMeThumbnail} name="DoForMe!" tech="C++/Qt/Lua" />
                        <ProjectItem workRef="sw/txt_alignment" image={TxtAlignmentThumbnail} name="Text alignment" tech="C" />
                        <ProjectItem workRef="sw/image_processing" image={ImageProcessingThumbnail} name="Image processing" tech="C++/WinAPI" />
                        <ProjectItem workRef="sw/traffic_sim" image={TrafficSimThumbnail} name="Traffic simulator" tech="C++/Qt" />
                        <ProjectItem workRef="sw/heartlight" image={HeartlightThumbnail} name="Heartlight" tech="Java ME" />
                        <ProjectItem workRef="sw/profi_website" image={ProfiWebsiteThumbnail} name="Profi's website" tech="Php/MySQL/JS" />
                        <ProjectItem workRef="sw/virtual_school" image={VirtualSchoolThumbnail} name="Virtual school" tech="C++" />
                        <ProjectItem workRef="sw/map_editor" image={MapEditorThumbnail} name="3D map editor" tech="C++/DirectX 11/HLSL" />
                        <ProjectItem workRef="sw/random_select" image={RandomSelectThumbnail} name="Random select algorithm" tech="Java SE" />
                        <ProjectItem workRef="sw/select" image={SelectThumbnail} name="Select algorithm" tech="Java SE" />
                        <ProjectItem workRef="sw/diet_selector" image={DietSelectorThumbnail} name="Diet selector - AHP" tech="Python 2.7" />
                        <ProjectItem workRef="sw/communicator" image={CommunicatorThumbnail} name="Internet communicator" tech="Java SE" />
                        <ProjectItem workRef="sw/paint_multiplayer" image={PaintMultiplayerThumbnail} name="Paint multiplayer" tech="Java SE/GWT" />
                        <ProjectItem workRef="sw/leapmotion_paint" image={LeapMotionThumbnail} name="LeapMotion paint" tech="Java/Leap Motion SDK" />
                    </ItemsContainer>

                    <h2>3D graphics</h2>
                    <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
                    <ItemsContainer>
                        <ProjectItem workRef="3d/my_room" image={MyRoomThumbnail} name="My room in 3D" tech="3ds Max 2009/VRay" />
                        <ProjectItem workRef="3d/students_house" image={StudentsHouseThumbnail} name="Student's house" tech="3ds Max 2009/VRay" />
                        <ProjectItem workRef="3d/classroom" image={ClassroomThumbnail} name="Classroom" tech="3ds Max 2009/VRay" />
                        <ProjectItem workRef="3d/knightly_room" image={KnightlyRoomThumbnail} name="'Knightly room'" tech="3ds Max 2011/VRay" />
                    </ItemsContainer>
                </Centered>
            </Container>
        );
    }
}

export default ProjectsPage;