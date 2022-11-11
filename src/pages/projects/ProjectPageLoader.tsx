import React, {Suspense, lazy} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import LoadingPage from '../../ux/LoadingPage';

const ProjectPageLoader = () => {
    const {type, id} = useParams();
    const Project = lazy(() => import(`./${type}/${id}/ProjectPage`));

    return (
        <Suspense fallback={<LoadingPage />}>
            <Project />
        </Suspense>
    );
};

export default ProjectPageLoader;