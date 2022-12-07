/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {Container} from '../../CommonStyles';

type Props = {
    onLoad: () => void,
    children: Array<JSX.Element> | JSX.Element
};

const CommonProjectPage = (props: Props) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    return <Container>{props.children}</Container>;
};

export default CommonProjectPage;