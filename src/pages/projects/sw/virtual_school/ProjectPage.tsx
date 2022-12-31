import React from 'react';
import ModalImage from "react-modal-image";

import CommonProjectPage from '../../CommonProjectPage';
import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.png';
import Pic3 from './assets/3.png';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Virtual school</h2>
            <p>
                In high school I came up with the initiative to create a school building guide.
                I decided to create 3D model (in 3Ds Max) of the interior halls and record transitions between different places,
                so that it is possible to click on arrows and move around the building. Moreover, it was possible to
                click on every room's door to display popup with description.
            </p>
            <p>
                The software has been prepared as a desktop application and took me a whole year to create.
                The size in MB of the project is quite big (300MB) because of the videos of the transitions.
            </p>

            <ModalImage small={Pic1} large={Pic1} />

            <p>
                Entry menu of the application
            </p>
            <ModalImage small={Pic2} large={Pic2} />

            <p>
                When moving around the hall
            </p>
            <ModalImage small={Pic3} large={Pic3} />
        </CommonProjectPage>
    );
};

export default ProjectPage;