import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic1 from './assets/1.jpg';
import Pic2 from './assets/2.png';
import Pic3 from './assets/3.png';

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
                    The size in MB of the project is quite big (300MB) because of the videos of the transitions.
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>

                <p>
                    Entry menu of the application
                </p>
                <Link href={Pic2}><Image src={Pic2}/></Link>

                <p>
                    When moving around the hall
                </p>
                <Link href={Pic3}><Image src={Pic3}/></Link>
            </Container>
        );
    }
}

export default WorkItemPage;