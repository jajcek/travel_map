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
            <h2>Student's house</h2>
            <p>
                The place where I lived at the first year of my studies.
                Renders are done in 3Ds Max 2009 using VRay render engine.
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