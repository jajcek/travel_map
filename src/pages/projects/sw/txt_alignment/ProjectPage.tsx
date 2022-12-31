import React from 'react';
import ModalImage from "react-modal-image";
import {Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.png';
import WorkArchive from './assets/alignment.rar';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Text alignment</h2>
            <p>
                Program for aligning text in a "newspaper" form:
            </p>

            <ModalImage small={Pic} large={Pic} />

            <p>
                It doesn't handle polish symbols. Column has to be wider than the longest word in the input text.
                <br/><br/>
                Usage:
            </p>
            <pre>alignment.exe a b c d &lt; e</pre>
            <p>
                <b>a</b> - width of the left margin<br/>
                <b>b</b> - width of the first column<br/>
                <b>c</b> - distance between columns<br/>
                <b>d</b> - width of the second column<br/>
                <b>e</b> - file to read
            </p>
            <p>
                You can also write it to another "<b>f</b>" file: <b>alignment.exe a b c d &lt; e &gt; f</b>
            </p>
            <p>
                Download link: <Link href={WorkArchive}>alignment.rar</Link>.
            </p>
        </CommonProjectPage>
    );
};

export default ProjectPage;