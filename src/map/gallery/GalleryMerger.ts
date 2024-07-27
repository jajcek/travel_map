import type {GalleryInfo, GalleryBucketInfo} from '../types';

function merge(galleryInfo: Array<GalleryInfo>, zoom: number): Array<GalleryBucketInfo> {
    const buckets: Array<GalleryBucketInfo> = [];
    var idx = 10;
    var newInfo = galleryInfo;
    while(newInfo.length !== 0) {
            const referenceInfo = newInfo[0];
            var result = newInfo.reduce((ctx: {toBucket: Array<GalleryInfo>, newInfo: Array<GalleryInfo>}, el) => {
              if (isCloseEnough(referenceInfo, el, zoom)) { // TODO check X too
                ctx.toBucket.push(el);
              } else {
                ctx.newInfo.push(el);
              }
              return ctx;
            }, {toBucket: [], newInfo: []})
            buckets.push(calculateAvgCoordinates(result.toBucket));
            newInfo = result.newInfo;
        --idx; // TODO remove later
        if (idx === 0) break;
    }
return buckets;
//     const used = new Set();
}

function calculateAvgCoordinates(infos: Array<GalleryInfo>): GalleryBucketInfo {
        var xCoord = 0;
        var yCoord = 0;
        infos.forEach((info) => {
            xCoord += info.coordinates[0];
            yCoord += info.coordinates[1];
            });
        return {
            coordinates: [xCoord/infos.length, yCoord/infos.length],
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
        console.log('factor', factor, zoom);
    return Math.abs(x.coordinates[1] - y.coordinates[1]) < factor && Math.abs(x.coordinates[0] - y.coordinates[0]) < factor;
    }

export default merge;