const fetchCrypto = async (symbol) => {
  const data = await fetchCryptoList();
  return data.find((s) => s.symbol === symbol);
};