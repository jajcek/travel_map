import React, {useEffect, useState} from "react";

import Gallery from './Gallery'
import loadThumbnail from './ThumbnailsLoader'

import type {GalleryBucketInfo, GalleryInfo} from '../types';


type Props = {
    galleryBucket: GalleryBucketInfo
}

const GalleryPopup = (props: Props) => {
    function createKey(gallery: GalleryInfo) {
        return gallery.name + gallery.coordinates[0] + gallery.coordinates[1];
    }

    return (
        <div>
            {
                props.galleryBucket.galleries.map((gallery) => {
                    return <Gallery key={createKey(gallery)} name={gallery.name} storageUrl={gallery.storageUrl} thumbnailUrls={gallery.thumbnailUrls}/> // TODO add key prop with unique id
                })
            }
        </div>
    );
}

export default GalleryPopup;
