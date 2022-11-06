import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.png';
import WorkArchive from './assets/heartlight.rar';

class ProjectPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Heartlight</h2>
                <p>
                    Heartlight game written in JME.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    Implemented things:<br/>
                    <ul>
                        <li>death of the dwarf when rock/heart hits the dwarf from the top as well as grenade explodes,</li>
                        <li>pushing soft rocks,</li>
                        <li>destroying soft rocks and soft walls with grenades,</li>
                        <li>creating new levels in easy mode - by editing text file, which represents a level,</li>
                        <li>possibility of going to the next level,</li>
                        <li>animations,</li>
                        <li>picking up hearts</li>
                    </ul>
                </p>
                <p>
                    Download link (NetBeans project): <Link href={WorkArchive}>heartlight.rar</Link>.
                </p>
            </Container>
        );
    }
}

export default ProjectPage;