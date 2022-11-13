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

export type ProjectMenuItemType = {
   href: string,
   image: string,
   name: string,
   tech: string
};

class ProjectsNavigationFactory {
    static getSoftwareProjects(): Array<ProjectMenuItemType> {
        return [
            {href: 'sw/infinite_terrain', image: InfiniteTerrainThumbnail, name: 'name', tech: 'tech'},
            {href: 'sw/do_for_me', image: DoForMeThumbnail, name: 'DoForMe!', tech: 'C++/Qt/Lua'},
            {href: 'sw/txt_alignment', image: TxtAlignmentThumbnail, name: 'Text alignment', tech: 'C'},
            {href: 'sw/image_processing', image: ImageProcessingThumbnail, name: 'Image processing', tech: 'C++/WinAPI'},
            {href: 'sw/traffic_sim', image: TrafficSimThumbnail, name: 'Traffic simulator', tech: 'C++/Qt'},
            {href: 'sw/heartlight', image: HeartlightThumbnail, name: 'Heartlight', tech: 'Java ME'},
            {href: 'sw/profi_website', image: ProfiWebsiteThumbnail, name: 'Profi\'s website', tech: 'Php/MySQL/JS'},
            {href: 'sw/virtual_school', image: VirtualSchoolThumbnail, name: 'Virtual school', tech: 'C++'},
            {href: 'sw/map_editor', image: MapEditorThumbnail, name: '3D map editor', tech: 'C++/DirectX 11/HLSL'},
            {href: 'sw/random_select', image: RandomSelectThumbnail, name: 'Random select algorithm', tech: 'Java SE'},
            {href: 'sw/select', image: SelectThumbnail, name: 'Select algorithm', tech: 'Java SE'},
            {href: 'sw/diet_selector', image: DietSelectorThumbnail, name: 'Diet selector - AHP', tech: 'Python 2.7'},
            {href: 'sw/communicator', image: CommunicatorThumbnail, name: 'Internet communicator', tech: 'Java SE'},
            {href: 'sw/paint_multiplayer', image: PaintMultiplayerThumbnail, name: 'Paint multiplayer', tech: 'Java SE/GWT'},
            {href: 'sw/leapmotion_paint', image: LeapMotionThumbnail, name: 'LeapMotion paint', tech: 'Java/Leap Motion SDK'}
        ];
    }

    static get3DProjects(): Array<ProjectMenuItemType> {
        return [
            {href: '3d/my_room', image: MyRoomThumbnail, name: 'My room in 3D', tech: '3ds Max 2009/VRay'},
            {href: '3d/students_house', image: StudentsHouseThumbnail, name: 'Student\'s house', tech: '3ds Max 2009/VRay'},
            {href: '3d/classroom', image: ClassroomThumbnail, name: 'Classroom', tech: '3ds Max 2009/VRay'},
            {href: '3d/knightly_room', image: KnightlyRoomThumbnail, name: '\'Knightly room\'', tech: '3ds Max 2011/VRay'}
        ];
    }
}

export default ProjectsNavigationFactory;