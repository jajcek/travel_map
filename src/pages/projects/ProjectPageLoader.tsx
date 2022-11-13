import React, {Suspense, lazy} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import LoadingPage from '../../ux/LoadingPage';

type Props = {
    onLoading: () => void
    onLoad: () => void
};

const ProjectPageLoader = (props: Props) => {
    const {type, id} = useParams();
    const Project = lazy(() => import(`./${type}/${id}/ProjectPage`));

    return (
         <Suspense fallback={<LoadingPage onLoad={props.onLoading} />}>
            <Project />
         </Suspense>
    );
};

export default ProjectPageLoader;