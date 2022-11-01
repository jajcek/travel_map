import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.jpg';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Virtual school</h2>
                <p>
                    In high school I came up with the initiative to create a school building guide.
                    I decided to create 3D model (in 3Ds Max) of the interior halls and record transitions between different places,
                    so that it is possible to click on arrows and move around the building. Moreover, it was possible to
                    click on every room's door to display popup with description.
                </p>
                <p>
                    The software has been prepared as a desktop application and took me a whole year to create.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>
            </Container>
        );
    }
}

export default WorkItemPage;