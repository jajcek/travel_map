import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.png';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>DoForMe!</h2>
                <p>
                    This is my <Link href="https://drive.google.com/open?id=0B7x6g4c3-UJfQzZtTXU1M1NMRDg">BSc project</Link> which
                    allows users to automate their work in a system.
                    The system is able to control mouse and keyboard (there are also a few more functionalities)
                    by functions used in Lua scripts. When the user already has the scripts there is a system
                    which simulates a calendar. By using the functionality a user is able to specify on what time and
                    with what repetitions the scripts will be invoked. Shortly saying the program is very similar e.g.
                    to <Link href="http://www.winautomation.com/">WinAutomation</Link>,&nbsp;
                    <Link href="http://www.autoclickextreme.com/">AutoClickExtreme</Link> or&nbsp;
                    <Link href="http://www.mjtnet.com/automation-software.htm">Macro Scheduler</Link>.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    When using the program a very important thing is when you have set the tasks on the calendar
                    you have to click "hide in tray" (the black bent arrow on the top left) to initialize the system
                    with the tasks, otherwise the tasks will not be invoked.
                </p>
                <p>
                    Full functionality has been described in the application help (unfortunately only in polish)
                    which is included in download link. The archive contains also a script which is able to draw
                    "Barnsley Fern" fractal in the MS Paint.
                </p>
                <p>
                    The application needs admin privileges if it's copied to the system partition.
                </p>
                <p>
                    Download link: <Link href="/work_archives/do_for_me/doforme.rar">doforme.rar</Link>.
                </p>
            </Container>
        );
    }
}

export default WorkItemPage;