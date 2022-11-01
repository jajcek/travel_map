import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.png';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Text alignment</h2>
                <p>
                    Program for aligning text in a "newspaper" form:
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    It doesn't handle polish symbols. Column has to be wider than the longest word in the input text.
                </p>
                <p>
                    Usage:
                    <pre>alignment.exe a b c d &lt; e</pre>
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
                    Download link: <Link href="/work_archives/txt_alignment/alignment.rar">alignment.rar</Link>.
                </p>
            </Container>
        );
    }
}

export default WorkItemPage;