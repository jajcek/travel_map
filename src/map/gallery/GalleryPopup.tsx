import React from "react";
import styled from 'styled-components'
import Gallery from './Gallery'
import {COLORS} from '../../CommonStyles';

import type {GalleryBucketInfo, GalleryInfo} from '../types';


type Props = {
    galleryBucket: GalleryBucketInfo
}

// TODO use COLORS
const Hint = styled.div`
    color: #383838;
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const GalleryPopup = (props: Props) => {
    function createKey(gallery: GalleryInfo) {
        return gallery.name + gallery.coordinates[0] + gallery.coordinates[1];
    }

    return (
        <React.Fragment>
            {
                props.galleryBucket.galleries.slice(0, 3).map((gallery) => {
                    return <Gallery key={createKey(gallery)} name={gallery.name} storageUrl={gallery.storageUrl} thumbnailUrls={gallery.thumbnailUrls}/> // TODO add key prop with unique id
                })
            }
            { props.galleryBucket.galleries.length > 3 && <Hint>Zoom in to see rest of the places...</Hint> }
        </React.Fragment>
    );
}

export default GalleryPopup;
