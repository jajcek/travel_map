import React from 'react';
import ModalImage from "react-modal-image";

import CommonProjectPage from '../../CommonProjectPage';
import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.jpg';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Classroom</h2>
            <p>
                Schoolroom where I was learning english language with my english teacher.
                Renders are done in 3Ds Max 2009 using VRay render engine.
            </p>

            <ModalImage small={Pic1} large={Pic1} />
            <ModalImage small={Pic2} large={Pic2} />
        </CommonProjectPage>
    );
};

export default ProjectPage;