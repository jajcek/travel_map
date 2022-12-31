import React from 'react';
import ModalImage from "react-modal-image";
import {Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Diet selector</h2>
            <p>
                An AHP method (<i>Analytic Hierarchy Process</i>) is used for determining best choices by using some criteria.
                In this application I have presented the algorithm on the diet selecting. The criteria are:
                price, nour, time, digestibility, calorific and simplicity. User is able to modify them
                as well as modify matrix values for every criterion.
            </p>
            <p>
                Whole project is available on <Link href="https://github.com/jajcek/diet_selector">github.com</Link>.
            </p>

            <ModalImage small={Pic} large={Pic} />
        </CommonProjectPage>
    );
};

export default ProjectPage;