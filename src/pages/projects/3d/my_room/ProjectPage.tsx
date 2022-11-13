import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';
import Pic3 from './assets/3.jpg';
import Pic4 from './assets/4.jpg';
import Pic5 from './assets/5.jpg';
import Pic6 from './assets/6.jpg';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <Container>
                <h2>My room</h2>
                <p>
                    Project of my room at home. The scene took me few days to model objects and an extra day for
                    adjusting render settings and rendering images. The scene was rendered in 3Ds Max 2009 using VRay render engine.
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>
                <Link href={Pic2}><Image src={Pic2}/></Link>
                <Link href={Pic3}><Image src={Pic3}/></Link>
                <Link href={Pic4}><Image src={Pic4}/></Link>
                <Link href={Pic5}><Image src={Pic5}/></Link>
                <Link href={Pic6}><Image src={Pic6}/></Link>
            </Container>
        </CommonProjectPage>
    );
};

export default ProjectPage;