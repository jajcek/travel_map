export type CountryInfo = String | null;

export type CountryClickHandler = (countryInfo: CountryInfo) => void;

export type VisitedCountryInfo = {
    name: string,
    desc: string
};

export type GalleryInfo = {
    name: string,
    coordinates: Array<number>,
    storageUrl: string,
    previewImagesUrls: Array<string>
};

export type GalleryBucketInfo = {
    coordinates: Array<number>,
    galleries: Array<GalleryInfo>
};

export enum Layer {
    VISITED,
    GALLERY
}