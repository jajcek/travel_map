import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic1 from './assets/1.png';
import Pic2 from './assets/2.png';
import WorkArchive from './assets/ts_editor.rar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <Container>
                <h2>Traffic simulator</h2>
                <p>
                    System for simulating traffic. The application is divided into editor, simulator and map converter.
                    The system has been created by using C++, Qt and Python.
                </p>
                <p>
                    <h4>Editor allows users:</h4>
                    <ul>
                        <li>importing real world maps from openstreetmap.org (after saving the map from openstreetmap.org
                        to xml it is necessary to convert it to our system format by our converter)</li>
                        <li>drawing new roads</li>
                        <li>setting road direction and type (one-way, two-way)</li>
                        <li>setting road layer (its "height" above the ground)</li>
                        <li>smoothing them by using bezier curve with specified number of nodes</li>
                    </ul>
                </p>
                <p>
                    <h4>Simulator allows:</h4>
                    <ul>
                    <li>setting speed of the simulation</li>
                    <li>specifying generators (points which generate traffic as a flow)</li>
                    <li>specifying attractors (points which attract flow)</li>
                    </ul>
                </p>
                <p>
                    The application has been created by me and two other guys. One of them was responsible for the
                    openstreetmap.org converter written in python. The other one was responsible for simulation algorithm and
                    I was responsible for creating editor, therefore because of it I'm gonna upload only editor.
                </p>
                <p>
                    Download link (editor only): <Link href={WorkArchive}>ts_editor.rar</Link>
                </p>
                <h3>Screenshots:</h3>

                <h4>Editor</h4>
                <Link href={Pic1}><Image src={Pic1}/></Link>

                <h4>Simulator</h4>
                <Link href={Pic2}><Image src={Pic2}/></Link>
            </Container>
        </CommonProjectPage>
    );
};

export default ProjectPage;