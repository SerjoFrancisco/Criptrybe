const fetchCrypto = async () => {
  const url = 'https://api.binance.com/api/v3/ticker/price';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);//REMOVERRRR
  return data;
}

if (typeof module !== 'undefined') {
  module.exports = { fetchCrypto };
}
