const buyCrypto = async () => {
  // localStorage.setItem('saldo', 1000);
  const symbol = document.querySelector('#options').value;
  const cryptoList = await fetchCryptoList();
  const price = parseFloat(cryptoList.find(({ symbol: sy }) => sy === symbol).price);
  const value = parseFloat(document.getElementById('input-value').value);
  const saldo = JSON.parse(localStorage.getItem('saldo'));
  if ( saldo >= value) {
    localStorage.setItem('saldo', saldo - value);
    console.log(saldo);
    const result = value / price;
    console.log(result.toFixed(8));
    return result.toFixed(8);
    
  }
}

const sellCrypto = async () => {

}

