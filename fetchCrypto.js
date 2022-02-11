const fetchCrypto = async (symbol) => {
  const data = await fetchCryptoList();
  console.log(data.find((s) => s.symbol === symbol));//REMOVERRRRR
  return data.find((s) => s.symbol === symbol);
};

if (typeof module !== 'undefined') {
  module.exports = { fetchCrypto };
}