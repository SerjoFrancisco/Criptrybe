import fetch from 'node-fetch'

const BASE_URL_COINLIB = 'https://coinlib.io/api/v1';
const API_KEY = 'be342d0c858bee30';

function customFetch(requestRoute, processData) {
  fetch(`${BASE_URL_COINLIB}${requestRoute}`)
  .then(response => response.json())
  .then(processData)
  .catch(error => console.log(error.message));
}

function fetchCryptoData(data) {
  console.log(data);
}

customFetch(`/coin?key=${API_KEY}&pref=BRL&symbol=BTC,ETH`, fetchCryptoData);
customFetch(`/coin?key=${API_KEY}&pref=USD&symbol=BNB,ADA`, fetchCryptoData);