const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesInfo = document.getElementById("countries-info");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${
              country.capital ? country.capital[0] : "No Capital"
            }</p>
            <button onclick=loadDetails('${country.cca2}') >Details</button>
        `;
    countriesInfo.appendChild(countryDiv);
  });
};

const loadDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url).then((res) => res.json().then((data) => displayFlag(data)));
};

const displayFlag = (country) => {
  const countryFlag = document.getElementById("country-flag");
  countryFlag.innerHTML = `
    <img src=${country[0].flags.png} />
  `;
};
loadCountries();
