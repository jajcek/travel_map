import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';
import WorkArchive from './assets/src.rar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <Container>
                <h2>Internet communicator</h2>
                <p>
                    Simple internet communicator written in Java using reactor pattern for handling users.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    Implemented things:
                    <ul>
                        <li>server counts bytes, messages sent by clients,</li>
                        <li>different statuses,</li>
                        <li>multiple windows (chat window for every user you write to),</li>
                        <li>logging in (no registering),</li>
                        <li>"friends list" (their identificators) - adding and deleting,</li>
                    </ul>
                </p>
                <p>
                    This program doesn't allow you to register new users (it was created only for testing network
                    connection in Java), it has 3 users written directly in code. I have uploaded source code
                    instead of compiled file in .jar. Users login and password information are:<br/>
                    <pre>
                    1, pass1<br/>
                    2, pass2<br/>
                    3, pass3
                    </pre>
                </p>
                <p>
                    Download link: <Link href={WorkArchive}>src.rar</Link>.
                </p>
            </Container>
        </CommonProjectPage>
    );
};

export default ProjectPage;