import React, {useState, SyntheticEvent} from "react";
import {createPortal} from 'react-dom';
import styled from 'styled-components'
import {COLORS} from '../../CommonStyles';
import {NO_OF_GALLERIES_IN_POPUP} from './GalleryConfig'
import ImageGallery from "react-image-gallery";

import type {GalleryBucketInfo, GalleryInfo} from '../types';

type Props = {
    galleryBucket: GalleryBucketInfo
}

// const images = [
//   {
//     original: "https://lh3.googleusercontent.com/d/1sQfJ8TE16T5ACSdntMIstRMt8gF04dzD",
//   },
//   {
//     original: "https://lh3.googleusercontent.com/d/13KRyWdIrCOihP37UE3R1zvrO-qHbRxs_",
//   },
//   {
//     original: "https://lh3.googleusercontent.com/d/1y3mFcNtURi1_Yo9Qs4DhZaJbQGg7lWV4",
//   },
// ];

const GalleryContainer = styled.div`
    &:first-of-type div {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    &:last-of-type div {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

const Name = styled.div`
    cursor: pointer;
    font-size: 18px;
    color: ${COLORS.HEADER_TEXT};
    height: 50px;
    align-content: center;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        color: #383838;
        background-color: rgba(204, 204, 204, 1);
    }
`;

const Hint = styled.div`
    color: ${COLORS.GALLERY_HINT_COLOR};
    background-color: ${COLORS.GALLERY_HINT_BACKGROUND};
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    position: fixed;
    color: white;
    z-index: 999999999999999;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

const CloseButton = styled.div`
    cursor: pointer;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
`;

const GalleryPopup = (props: Props) => {
    const [shouldDisplayImages, setShouldDisplayImages] = useState<boolean>(false);
    const [imageUrls, setImageUrls] = useState<any>([]);

    function createKey(gallery: GalleryInfo) {
        return gallery.name + gallery.coordinates[0] + gallery.coordinates[1];
    }

    function showImages(images: Array<string>) {
        const formattedImagesForLibrary = images.map((img) => {
            return {original: img};
        });
        setImageUrls(formattedImagesForLibrary);
        setShouldDisplayImages(true);
    }

    function hideImages() {
        setShouldDisplayImages(false);
    }



    const imagesWindow = () => {
        return (
            <Wrapper id="clickable-background" onClick={(event: SyntheticEvent) => {
                const target = event.target as HTMLElement;
                if (target.id === 'clickable-background')
                    hideImages();
                }}>
                <ImageGallery items={imageUrls} showThumbnails={false} showIndex={true}/>
                <CloseButton onClick={() => hideImages()}>CLOSE</CloseButton>
            </Wrapper>);
    }

    return (
        <React.Fragment>
            {
                props.galleryBucket.galleries.slice(0, NO_OF_GALLERIES_IN_POPUP).map((gallery) => {
                    return <GalleryContainer key={createKey(gallery)}>
                               <Name onClick={() => showImages(gallery.imageUrls)}>{gallery.name}</Name>
                           </GalleryContainer>
                })
            }
            { shouldDisplayImages && createPortal(imagesWindow(), document.body) }
            { props.galleryBucket.galleries.length > NO_OF_GALLERIES_IN_POPUP && <Hint>Zoom in to see rest of the places...</Hint> }
        </React.Fragment>
    );
}

export default GalleryPopup;
