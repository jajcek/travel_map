import React, {useEffect, useState} from "react";
import styled from 'styled-components'

import {COLORS} from '../../CommonStyles';
import loadThumbnail from './ThumbnailsLoader'

type Props = {
    name: string,
    storageUrl: string,
    thumbnailUrls: Array<string>
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

const ProgressInfo = styled.div`
    color: ${COLORS.HEADER_TEXT};
`;

const Gallery = (props: Props) => {
    const [thumbnails, setThumbnails] = useState<Array<string>>([]);

    useEffect(() => {
        const getData = async () => {
            const loadedImages: Array<string> = [];
            for (const url of props.thumbnailUrls) {
                const img = await loadThumbnail(url) as string;
                loadedImages.push(img);
            };
            setThumbnails(loadedImages as Array<string>);
        }
        getData();
    }, [props.thumbnailUrls]);

    function renderThumbnails() {
        if (thumbnails.length === 0) {
            if (props.thumbnailUrls.length !== 0) {
                return <ProgressInfo>loading</ProgressInfo>;
            } else if (props.thumbnailUrls.length === 0) {
                return <ProgressInfo>There are no images included.</ProgressInfo>;
            }
        } else {
            return thumbnails.map((thumbnail) => {
                return <img key={thumbnail} src={thumbnail} alt=''/>
            })
        }
    }

    return (
        <GalleryContainer>
            <Name>{props.name}</Name>
            { props.thumbnailUrls.length !== 0 && <StorageLink><a className="storageLink" href={props.storageUrl}>View more</a></StorageLink> }
            {
                renderThumbnails()
            }
        </GalleryContainer>
    );
}

export default Gallery;
