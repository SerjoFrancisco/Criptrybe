window.onload = async () => {
  fetchCryptoList();
  console.log(await fetchCrypto('BTCBRL'));
}