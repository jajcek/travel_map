import React from 'react';
import {Container, Image, Link} from '../../../../CommonStyles';

import CommonProjectPage from '../../CommonProjectPage';
import Pic from './assets/1.jpg';
import UserDoc from './assets/user_doc.pdf';

type Props = {
    onLoad: () => void
};

const ProjectPage = (props: Props) => {
    return (
        <CommonProjectPage onLoad={props.onLoad}>
            <h2>Map editor</h2>
            <p>
                This program presents simple map editor or something similar (it still needs a lot of things,
                but actually the purpose of this app was to try out the DX stuff and how it works).
                It was written in C++ using DirectX 11 and HLSL shaders. GUI has been created with MFC.
            </p>

            <Link href={Pic}><Image src={Pic}/></Link>

            <p>
                Functionality that the program offers:<br/>
                <ul>
                  <li>loading models from a folder (OBJ files without textures),</li>
                  <li>adding/deleting models to/from the scene by using mouse,</li>
                  <li>mouse picking (selecting models by clicking on them),</li>
                  <li>moving/rotating/scaling models,</li>
                  <li>saving/loading maps,</li>
                  <li>turning grid off/on,</li>
                  <li>statistics:</li>
                    <ul>
                      <li>camera position and rotation,</li>
                      <li>mouse coordinates in 3D space,</li>
                      <li>number of models in the scene</li>
                    </ul>
                  <li>camera operating:</li>
                    <ul>
                      <li>rotating on a sphere</li>
                      <li>moving in all directions orthogonally to the direction vector</li>
                      <li>zooming</li>
                    </ul>
                </ul>
            </p>
            <p>
                User documentation which presents the functionalities: <Link href={UserDoc}>user_doc.pdf</Link>.
            </p>
        </CommonProjectPage>
    );
};

export default ProjectPage;