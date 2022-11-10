import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';

class ProjectPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Classroom</h2>
                <p>
                    Schoolroom where I was learning english language with my english teacher.
                    Renders are done in 3Ds Max 2009 using VRay render engine.
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>
                <Link href={Pic2}><Image src={Pic2}/></Link>
            </Container>
        );
    }
}

export default ProjectPage;