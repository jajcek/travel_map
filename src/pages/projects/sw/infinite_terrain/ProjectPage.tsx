import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import Pic1 from './assets/ex1.png';
import Pic2 from './assets/ex2.png';
import Pic3 from './assets/ex3.png';
import Pic4 from './assets/ex4.png';
import Pic5 from './assets/ex5.png';

class ProjectPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Infinite 3D terrain</h2>
                <p>
                    This is a 3D terrain engine written for the <Link href="https://drive.google.com/open?id=0B7x6g4c3-UJfV2NwbkE0MVhPY1E">MSc thesis</Link>.
                    The engine renders infinite terrain (when moving around it generates necessary terrain parts) and exposes very easy api to create many
                    biomes on the terrain. The biomes may change according to latitude value or may be spread
                    randomly ignoring the latitude. Each of them has its own function to generate shape of the landscape.
                    Also other parts of the system are highly parametrizable - all parameters have been described in
                    the thesis (like cell size, longitude change speed, dissolving factor, layers number, blur, quad size etc.).
                    The water is not finished yet (it's generated only as a simple plane in one place).
                </p>

                <Link href={Pic1}><Image src={Pic1}/></Link>
                <Link href={Pic2}><Image src={Pic2}/></Link>
                <Link href={Pic3}><Image src={Pic3}/></Link>
                <Link href={Pic4}><Image src={Pic4}/></Link>

                <p>
                    Together with the engine I have created a map viewer which allows to look at the entire terrain
                    that has been generated by the engine. It shows the terrain as a heightmap or a normal map.
                </p>

                <Link href={Pic5}><Image src={Pic5}/></Link>
            </Container>
        );
    }
}

export default ProjectPage;