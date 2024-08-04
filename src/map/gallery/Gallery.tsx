import React from "react";
import styled from 'styled-components'

import {COLORS} from '../../CommonStyles';

type Props = {
    name: string,
    storageUrl: string,
    thumbnailUrl: string | undefined
}

const GalleryContainer = styled.div`
    &:not(:last-of-type) {
        border-bottom: 3px solid ${COLORS.HEADER_BORDER};
        border-bottom-color: linear-gradient(0.25turn, white, black 30% 70%, white);
        padding: 10px;
    }
    &:last-of-type {
        padding: 10px;
    }
`;

const Name = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: ${COLORS.HEADER_TEXT};
`;

// a.storageLink class below is added to win specificity with leaflet-container class
const StorageLink = styled.div`
    margin-bottom: 5px;
    > a.storageLink {
        & {
            color: ${COLORS.HEADER_TEXT};
            text-decoration: none;
            font-style: italic;
        }
}
`;

const Gallery = (props: Props) => {
    return (
        <GalleryContainer>
            <Name>{props.name}</Name>
            <StorageLink><a className="storageLink" href={props.storageUrl}>View more</a></StorageLink>
        </GalleryContainer>
    );
}

export default Gallery;
