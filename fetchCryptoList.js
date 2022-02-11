const BASE_URL_BINANCE = 'https://api.binance.com';

const customFetch = async (endpoint, callback) => {
  const response = await fetch(BASE_URL_BINANCE + endpoint);
  const data = await response.json();
  return callback(data);
}

const callbackCryptoList = (data) => data.filter((item) => item.symbol.includes('BRL'));

const fetchCryptoList = () => customFetch('/api/v3/ticker/price', callbackCryptoList);

/* if (typeof module !== 'undefined') {
  module.exports = { fetchCryptoList };
} */
