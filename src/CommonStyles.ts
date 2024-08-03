import styled, {keyframes} from 'styled-components'

export const COLORS = {
    BASE_TEXT: "#383838",
    MAIN_BACKGROUND: "#f4f4f4",
    HEADER_BACKGROUND: "#383838",
    HEADER_BORDER: "#ccc",
    HEADER_TEXT: "#f4f4f4",
    HEADER_HOVERED_TEXT: "#383838",
    HEADER_HOVERED_BACKGROUND: "#ccc",
    INTRO_MENU_HOVERED: "#686868",
    INTRO_BACKGROUND: "linear-gradient(145deg, rgba(220,220,220,1) 0%, rgba(244,244,244,1) 100%)",
    EXP_BACKGROUND_COLOR1: "#e6e6e6",
    EXP_BACKGROUND_COLOR2: "#f4f4f4",
    EXP_DETAIL_TEXT: "#686868",
    PROJECT_ITEM_BACKGROUND: "#ccc",
    GALLERY_HINT_BACKGROUND: "#f4f4f4",
    GALLERY_HINT_COLOR: "#383838",
};

export const MOBILE_WIDTH = '500px';

export const Container = styled.div`
    background-color: ${COLORS.MAIN_BACKGROUND};
    line-height: 30px;
    margin: 0 auto;
    max-width: 800px;
    padding: 10px;
    align-items: center;
    text-align: justify;
    color: ${COLORS.BASE_TEXT};
`;

export const CenteredHeader = styled.h2`
    text-align: center;
`;

export const Link = styled.a.attrs(props => ({
    target: "_blank",
    rel: "noreferrer"
}))`
    &, &:visited {
        color: ${COLORS.BASE_TEXT};
    }
`;

export const Image = styled.img<{src: string}>`
    max-width: 100%;
`;

export const Text = styled.div<{size: string}>`
    font-size: ${props => props.size}px;
`;

export const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;