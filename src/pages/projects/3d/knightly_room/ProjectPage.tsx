import React from 'react';
import ModalImage from "react-modal-image";

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
            <h2>Knightly room</h2>
            <p>
                This is the project of "Knightly room" that I've made for some company which is involved in
                funding heritage park building in Leszczyna. Renders are done in 3Ds max 2011 using VRay render engine.
            </p>

            <ModalImage small={Pic1} large={Pic1} />
            <ModalImage small={Pic2} large={Pic2} />
            <ModalImage small={Pic3} large={Pic3} />
            <ModalImage small={Pic4} large={Pic4} />
        </CommonProjectPage>
    );
};

export default ProjectPage;