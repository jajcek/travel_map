export type CountryInfo = String | null

export type CountryClickHandler = (countryInfo: CountryInfo) => void;

export type VisitedCountryInfo = {
    name: String,
    desc: String
}