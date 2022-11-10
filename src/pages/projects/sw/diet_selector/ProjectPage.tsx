import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import Pic from './assets/1.png';

class ProjectPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Diet selector</h2>
                <p>
                    An AHP method (<i>Analytic Hierarchy Process</i>) is used for determining best choices by using some criterions.
                    In this application I have presented the algorithm on the diet selecting. The criterions are:
                    price, nour, time, digestibility, calorific and simplicity. User is able to modify them
                    as well as modify matrix values for every criterion.
                </p>
                <p>
                    Whole project is available on <Link href="https://github.com/jajcek/diet_selector">github.com</Link>.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>
            </Container>
        );
    }
}

export default ProjectPage;