import styled from 'styled-components'

export const COLORS = {
    BASE_TEXT: "#383838",
    MAIN_BACKGROUND: "#f4f4f4",
    HEADER_BACKGROUND: "#383838",
    HEADER_BORDER: "#ccc",
    HEADER_TEXT: "#f4f4f4",
    HEADER_HOVERED_TEXT: "#383838",
    HEADER_HOVERED_BACKGROUND: "#ccc",
    INTRO_MENU_HOVERED: "#686868",
    EXP_BACKGROUND_COLOR1: "#e6e6e6",
    EXP_BACKGROUND_COLOR2: "#f4f4f4",
    EXP_DETAIL_TEXT: "#686868",
    PROJECT_ITEM_BACKGROUND: "#ccc"
};

export const Link = styled.a.attrs(props => ({
    target: "_blank",
    rel: "noreferrer"
}))`
    &, &:visited {
        color: ${COLORS.BASE_TEXT};
    }
`;