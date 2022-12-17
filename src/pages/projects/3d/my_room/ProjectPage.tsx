import React from 'react';
import ModalImage from "react-modal-image";

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
            <h2>My room</h2>
            <p>
                Project of my room at home. The scene took me few days to model objects and an extra day for
                adjusting render settings and rendering images. The scene was rendered in 3Ds Max 2009 using VRay render engine.
            </p>

            <ModalImage small={Pic1} large={Pic1} />
            <ModalImage small={Pic2} large={Pic2} />
            <ModalImage small={Pic3} large={Pic3} />
            <ModalImage small={Pic4} large={Pic4} />
            <ModalImage small={Pic5} large={Pic5} />
            <ModalImage small={Pic6} large={Pic6} />
        </CommonProjectPage>
    );
};

export default ProjectPage;