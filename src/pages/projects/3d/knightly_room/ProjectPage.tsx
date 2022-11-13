import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';
import Pic3 from './assets/3.jpg';
import Pic4 from './assets/4.jpg';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <Container>
                <h2>Knightly room</h2>
                <p>
                    This is the project of "Knightly room" that I've made for some company which is involved in
                    funding heritage park building in Leszczyna. Renders are done in 3Ds max 2011 using VRay render engine.
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>
                <Link href={Pic2}><Image src={Pic2}/></Link>
                <Link href={Pic3}><Image src={Pic3}/></Link>
                <Link href={Pic4}><Image src={Pic4}/></Link>
            </Container>
        </CommonProjectPage>
    );
};

export default ProjectPage;