import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Profi's website</h2>
            <p>
                Some day I had to create a website for a guy who loves travelling around the world.
                It was quite challenging from technical perspective as he didn't know anything about html or css.
                Moreover he had every article in *.doc format,
                so it would be too painful to rewrite it somewhere else. I decided to create an untypical admin panel
                for managing articles. Before uploading the doc files they are should be exported to html and then, during uploading,
                the algorithm searches for patterns in the html to adjust it to the website template.
                The system also has an ability to put red dots on the map and type a text in it.
            </p>
            <p>
                Unfortunately, as of today, the website is not available online.
            </p>

            <Link href={Pic}><Image src={Pic}/></Link>
        </CommonProjectPage>
    );
};

export default ProjectPage;