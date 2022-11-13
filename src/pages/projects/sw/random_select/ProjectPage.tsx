import React from 'react';
import {Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';
import WorkArchive from './assets/rselect.jar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Random select algorithm</h2>
            <p>
                Presentation of randomized select algorithm written in Java.
            </p>

            <Link href={Pic}><Image src={Pic}/></Link>

            <p>
                Text field on the left takes statistic to find and the one on the right generates
                the number of values (64 is the value that is still visible on the default size of the form,
                the bars doesn't scale to fit the window).
            </p>
            <p>
                After generating values you need to click "Begin" and "Next step" to go to the next step of
                the algorithm. There's no checking for idiot-input.
            </p>

            <p>
                Download link: <Link href={WorkArchive}>rselect.jar</Link>.
            </p>
        </CommonProjectPage>
    );
};

export default ProjectPage;