import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {Container} from '../../CommonStyles';
import ProjectMenuItem from './ProjectMenuItem';

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
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/infinite_terrain" image={InfiniteTerrainThumbnail} name="Infinite 3D terrain" tech="C++/DirectX 11/HLSL" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/do_for_me" image={DoForMeThumbnail} name="DoForMe!" tech="C++/Qt/Lua" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/txt_alignment" image={TxtAlignmentThumbnail} name="Text alignment" tech="C" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/image_processing" image={ImageProcessingThumbnail} name="Image processing" tech="C++/WinAPI" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/traffic_sim" image={TrafficSimThumbnail} name="Traffic simulator" tech="C++/Qt" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/heartlight" image={HeartlightThumbnail} name="Heartlight" tech="Java ME" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/profi_website" image={ProfiWebsiteThumbnail} name="Profi's website" tech="Php/MySQL/JS" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/virtual_school" image={VirtualSchoolThumbnail} name="Virtual school" tech="C++" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/map_editor" image={MapEditorThumbnail} name="3D map editor" tech="C++/DirectX 11/HLSL" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/random_select" image={RandomSelectThumbnail} name="Random select algorithm" tech="Java SE" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/select" image={SelectThumbnail} name="Select algorithm" tech="Java SE" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/diet_selector" image={DietSelectorThumbnail} name="Diet selector - AHP" tech="Python 2.7" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/communicator" image={CommunicatorThumbnail} name="Internet communicator" tech="Java SE" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/paint_multiplayer" image={PaintMultiplayerThumbnail} name="Paint multiplayer" tech="Java SE/GWT" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="sw/leapmotion_paint" image={LeapMotionThumbnail} name="LeapMotion paint" tech="Java/Leap Motion SDK" />
            </ItemsContainer>

            <h2>3D graphics</h2>
            <p>Some years ago I was also playing around with 3D graphics. Below you can find some of my projects.</p>
            <ItemsContainer>
                <ProjectMenuItem onClick={props.onItemClick} projectRef="3d/my_room" image={MyRoomThumbnail} name="My room in 3D" tech="3ds Max 2009/VRay" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="3d/students_house" image={StudentsHouseThumbnail} name="Student's house" tech="3ds Max 2009/VRay" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="3d/classroom" image={ClassroomThumbnail} name="Classroom" tech="3ds Max 2009/VRay" />
                <ProjectMenuItem onClick={props.onItemClick} projectRef="3d/knightly_room" image={KnightlyRoomThumbnail} name="'Knightly room'" tech="3ds Max 2011/VRay" />
            </ItemsContainer>
        </Container>
    );
};

export default ProjectsPage;