import React from 'react';
import {Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';
import WorkArchiveThreads from './assets/multipaint_th.rar';
import WorkArchiveReactor from './assets/multipaint_r.rar';
import WorkArchiveGwt from './assets/multipaint_gwt.rar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Paint multiplayer</h2>
            <p>
                Simple paint with multiplayer mode written in Java using threads.
            </p>

            <Link href={Pic}><Image src={Pic}/></Link>

            <p>
                Implemented things:
            </p>
            <ul>
                <li>simple shapes:</li>
                <ul>
                    <li>point,</li>
                    <li>line,</li>
                    <li>rectangle,</li>
                    <li>circle</li>
                </ul>
                <li>changing colour</li>
            </ul>

            <p>
                Source code: <Link href={WorkArchiveThreads}>multipaint_th.rar</Link>
            </p>
            <hr/>
            <p>
                The application has been also implemented by using reactor pattern instead of threads.
                <br/>
                Source code: <Link href={WorkArchiveReactor}>multipaint_r.rar</Link>
            </p>
            <hr/>
            <p>
                There is also available version implemented in GWT.
                <br/>
                Source code: <Link href={WorkArchiveGwt}>multipaint_gwt.rar</Link>
            </p>
        </CommonProjectPage>
    );
};

export default ProjectPage;