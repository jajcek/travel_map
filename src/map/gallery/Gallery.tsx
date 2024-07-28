import React, {useEffect, useState} from "react";

import loadThumbnail from './ThumbnailsLoader'

import type {GalleryInfo} from '../types';


type Props = {
    name: string,
    storageUrl: string,
    thumbnailUrls: Array<string>
}

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
    }, []);

    function renderThumbnails() {
        if (thumbnails.length === 0) {
            if (props.thumbnailUrls.length !== 0) {
                return <div>loading</div>;
            } else if (props.thumbnailUrls.length === 0) {
                return <div>no images</div>;
            }
        } else {
            return thumbnails.map((thumbnail) => {
                return <img key={thumbnail} src={thumbnail}/>
            })
        }
    }

    return (
        <div>
            <div>{props.name}</div>
            <div>{props.storageUrl}</div>
            {
                renderThumbnails()
            }
        </div>
    );
}

export default Gallery;
