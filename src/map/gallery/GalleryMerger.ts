import type {GalleryInfo, GalleryBucketInfo} from '../types';

function mergeGalleries(galleryInfos: Array<GalleryInfo>, zoom: number): Array<GalleryBucketInfo> {
    const buckets: Array<GalleryBucketInfo> = [];
    var leftGalleryInfos = galleryInfos;
    while (leftGalleryInfos.length !== 0) {
        const referenceInfo = leftGalleryInfos[0];
        var result = leftGalleryInfos.reduce((ctx: {toBucket: Array<GalleryInfo>, leftGalleryInfos: Array<GalleryInfo>}, processedInfo) => {
            if (isCloseEnough(referenceInfo, processedInfo, zoom)) {
                ctx.toBucket.push(processedInfo);
            } else {
                ctx.leftGalleryInfos.push(processedInfo);
            }
            return ctx;
        }, {toBucket: [], leftGalleryInfos: []})
        buckets.push(calculateBucketInfoWithAvgCoordinates(result.toBucket));
        leftGalleryInfos = result.leftGalleryInfos;
    }
    return buckets;
}

function calculateBucketInfoWithAvgCoordinates(infos: Array<GalleryInfo>): GalleryBucketInfo {
    var xCoord = 0;
    var yCoord = 0;
    infos.forEach((info) => {
        xCoord += info.coordinates[0];
        yCoord += info.coordinates[1];
    });
    return {
        coordinates: [xCoord / infos.length, yCoord / infos.length],
        galleries: infos
    }
}

function getFactor(zoom: number): number {
    if (zoom <= 5) {
        return 2.0;
    } else if (zoom <= 8) {
        return 0.5
    } else if (zoom <= 10) {
        return 0.1
    }

    return 0.01;
}

function isCloseEnough(x: GalleryInfo, y: GalleryInfo, zoom: number) {
    const factor = getFactor(zoom);
    return Math.abs(x.coordinates[0] - y.coordinates[0]) < factor &&
           Math.abs(x.coordinates[1] - y.coordinates[1]) < factor;
}

export default mergeGalleries;