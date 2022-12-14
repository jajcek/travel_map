import React from 'react';
import ModalImage from "react-modal-image";
import {Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';
import WorkArchive from './assets/heartlight.rar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Heartlight</h2>
            <p>
                Heartlight game written in JME.
            </p>

            <ModalImage small={Pic} large={Pic} />

            <p>
                Implemented things:
            </p>
            <ul>
                <li>death of the dwarf when rock/heart hits the dwarf from the top as well as grenade explodes,</li>
                <li>pushing soft rocks,</li>
                <li>destroying soft rocks and soft walls with grenades,</li>
                <li>creating new levels in easy mode - by editing text file, which represents a level,</li>
                <li>possibility of going to the next level,</li>
                <li>animations,</li>
                <li>picking up hearts</li>
            </ul>

            <p>
                Download link (NetBeans project): <Link href={WorkArchive}>heartlight.rar</Link>.
            </p>
        </CommonProjectPage>
    );
};

export default ProjectPage;