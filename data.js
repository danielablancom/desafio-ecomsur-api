const formIpunt = document.querySelector("#formInput");
const inputText = document.querySelector("#inputText");

const searcherInput = (data) => {
  formInput.addEventListener("keyup", async (e) => {
    e.preventDefault();

    const clientText = inputText.value.toLowerCase();

    const searchCountries = data.filter((item) => {
      const apiText = item.name.toLowerCase();
      if (apiText.indexOf(clientText) !== -1) {
        return item;
      }
    });
    showMainCountriesInfo(searchCountries);
  });
};


