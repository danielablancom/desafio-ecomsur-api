const showElements = document.querySelector("#elements");

document.addEventListener("DOMContentLoaded", function (event) {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");

    const data = await res.json();
    showMainCountriesInfo(data);

    searcherInput(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataCurrency = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/currency");

    const dataCurrency = await res.json();
    console.log(dataCurrency);
  } catch (error) {
    console.log(error);
  }
};

const showMainCountriesInfo = (data) => {
  let templateElement = "";

  data.forEach((obj) => {
    templateElement += `
            <div class="card">
            <img src="${obj.flag}" alt="Bandera ${obj.name}" class="img-frontCard">
                <div class="card-content">
                    <h3>${obj.name}</h3>
                    <p>
                        <b>Región: </b>
                        ${obj.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${obj.capital}
                    </p>
                    <p>
                        <b>Población: </b>
                        ${obj.population}
                    </p>
                    <p>
                    
                    <b>Moneda: </b>
                    ${obj.currencies[1]}
                </p>
                <p>
                    
                <b>Idioma: </b>
                ${obj.currencies}
            </p>
                </div>
    
            </div>
            `;
  });
  showElements.innerHTML = templateElement;
};
