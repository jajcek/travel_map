import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';
import Pic3 from './assets/3.jpg';
import Pic4 from './assets/4.jpg';
import Pic5 from './assets/5.jpg';
import Pic6 from './assets/6.jpg';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Student's house</h2>
                <p>
                    The place where I lived at the first year of my studies.
                    Renders are done in 3Ds Max 2009 using VRay render engine.
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>
                <Link href={Pic2}><Image src={Pic2}/></Link>
                <Link href={Pic3}><Image src={Pic3}/></Link>
                <Link href={Pic4}><Image src={Pic4}/></Link>
                <Link href={Pic5}><Image src={Pic5}/></Link>
                <Link href={Pic6}><Image src={Pic6}/></Link>
            </Container>
        );
    }
}

export default WorkItemPage;