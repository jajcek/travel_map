import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

type Props = {
    onLoad: () => void,
    children: JSX.Element
};

const CommonProjectPage = (props: Props) => {
    useEffect(() => {
        props.onLoad();
    }, [useLocation()]);

    return props.children;
};

export default CommonProjectPage;