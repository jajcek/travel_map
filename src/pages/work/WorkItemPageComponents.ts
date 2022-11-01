import styled from 'styled-components';
import {COLORS} from '../../StyleConstants';

export const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    line-height: 30px;
    margin: 50px auto;
    width: 800px;
    align-items: center;
    text-align: justify;

    h2 {
        text-align: center;
    }
`;

export const Image = styled.img<{src: string}>`
    max-width: 100%;
`;

export const Link = styled.a.attrs(props => ({
    target: "_blank",
    rel: "noreferrer"
}))`
    &, &:visited {
        color: ${COLORS.BASE_TEXT};
    }
`;