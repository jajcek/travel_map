import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

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
            <Container>
                <h2>Paint multiplayer</h2>
                <p>
                    Simple paint with multiplayer mode written in Java using threads.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    Implemented things:
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
                </p>
                <p>
                    Source code: <Link href={WorkArchiveThreads}>multipaint_th.rar</Link>

                    <hr/>

                    The application has been also implemented by using reactor pattern instead of threads.
                    <br/>
                    Source code: <Link href={WorkArchiveReactor}>multipaint_r.rar</Link>

                    <hr/>

                    There is also available version implemented in GWT.
                    <br/>
                    Source code: <Link href={WorkArchiveGwt}>multipaint_gwt.rar</Link>
                </p>
            </Container>
        </CommonProjectPage>
    );
};

export default ProjectPage;