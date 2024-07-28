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
`;

const GalleryPopup = (props: Props) => {
    function createKey(gallery: GalleryInfo) {
        return gallery.name + gallery.coordinates[0] + gallery.coordinates[1];
    }

    return (
        <React.Fragment>
            { props.galleryBucket.galleries.length > 1 && <Hint>Zoom in to see more accurate pins</Hint> }
            {
                props.galleryBucket.galleries.map((gallery) => {
                    return <Gallery key={createKey(gallery)} name={gallery.name} storageUrl={gallery.storageUrl} thumbnailUrls={gallery.thumbnailUrls}/> // TODO add key prop with unique id
                })
            }
        </React.Fragment>
    );
}

export default GalleryPopup;
