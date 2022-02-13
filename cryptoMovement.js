const buyCrypto = async () => {
  const symbol = document.querySelector('#options').value;
  const cryptoList = await fetchCryptoList();
  const price = parseFloat(cryptoList.find(({ symbol: sy }) => sy === symbol).price);
  const value = parseFloat(document.getElementById('input-value').value);
  const result = value / price;
  return result;
}

