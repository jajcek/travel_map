export type CountryInfo = {
  name: String,
  iso_a3_name: String
}

export type CountryClickHandler = (countryInfo: CountryInfo) => void;
