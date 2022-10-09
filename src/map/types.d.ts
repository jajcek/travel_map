export type CountryInfo = String | null;

export type CountryClickHandler = (countryInfo: CountryInfo) => void;

export type VisitedCountryInfo = {
    name: string,
    desc: string
};

export type Layer = "Visited" | "Gallery";