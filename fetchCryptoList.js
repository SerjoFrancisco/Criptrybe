const fetchCryptoList = async () => {
  const url = 'https://api.binance.com/api/v3/ticker/price';
  const response = await fetch(url);
  const data = await response.json();
  const brlData = data.filter((item) => item.symbol.includes('BRL'));
  console.log(brlData);//REMOVERRRR
  return brlData;
}

if (typeof module !== 'undefined') {
  module.exports = { fetchCryptoList };
}
