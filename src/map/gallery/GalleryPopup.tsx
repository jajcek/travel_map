import React from "react";
import styled from 'styled-components'
import Gallery from './Gallery'
import {COLORS} from '../../CommonStyles';
import {NO_OF_GALLERIES_IN_POPUP} from './GalleryConfig'

import type {GalleryBucketInfo, GalleryInfo} from '../types';


type Props = {
    galleryBucket: GalleryBucketInfo
}

const Hint = styled.div`
    color: ${COLORS.GALLERY_HINT_COLOR};
    background-color: ${COLORS.GALLERY_HINT_BACKGROUND};
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
                props.galleryBucket.galleries.slice(0, NO_OF_GALLERIES_IN_POPUP).map((gallery) => {
                    return <Gallery key={createKey(gallery)} name={gallery.name} storageUrl={gallery.storageUrl} thumbnailUrl={gallery.thumbnailUrl}/> // TODO add key prop with unique id
                })
            }
            { props.galleryBucket.galleries.length > NO_OF_GALLERIES_IN_POPUP && <Hint>Zoom in to see rest of the places...</Hint> }
        </React.Fragment>
    );
}

export default GalleryPopup;
