import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.png';
import WorkArchive from './assets/paint-leapmotion.7z';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>LeapMotion paint</h2>
                <p>
                    At the studies we were told to create something that requires a bit more sophisticated
                    interaction between human and the machine. I teamed up with 3 other people and chose leap motion
                    to try out the SDK and the device itself. In a pretty limited amount of time we created the app
                    for drawing using the SDK for Java.
                </p>
                <p>
                    The app has implemented few drawing tools
                    (dragging, spray, eraser, pen, brush) and color selection. We also implemented an infinite canvas,
                    drawing pressure (the closer your finger to the screen is the smaller tool size is chosen)
                    and multifinger drawing.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    Download link: <Link href={WorkArchive}>paint-leapmotion.7z</Link>.
                </p>
            </Container>
        );
    }
}

export default WorkItemPage;