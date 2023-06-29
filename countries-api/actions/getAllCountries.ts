const baseUrl = 'https://restcountries.com/v3.1';
const fields =
  'name,tld,cca3,capital,currencies,region,subregion,languages,borders,population,flags';

export async function getAllCountries() {
  const res = await fetch(`${baseUrl}/all?fields=${fields}`);
  if (!res.ok) {
    return null;
  }
  const countries = await res.json();
  return countries;
}
