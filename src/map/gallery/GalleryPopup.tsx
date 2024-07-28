import React, {useEffect, useState} from "react";

import Gallery from './Gallery'
import loadThumbnail from './ThumbnailsLoader'

import type {GalleryBucketInfo} from '../types';


type Props = {
    galleryBucket: GalleryBucketInfo
}

const GalleryPopup = (props: Props) => {
    return (
        <div>
            {
                props.galleryBucket.galleries.map((gallery) => {
                    return <Gallery name={gallery.name} storageUrl={gallery.storageUrl} thumbnailUrls={gallery.thumbnailUrls}/> // TODO add key prop with unique id
                })
            }
        </div>
    );
}

export default GalleryPopup;
