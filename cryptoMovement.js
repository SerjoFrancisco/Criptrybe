const buyCrypto = async () => {
  const user = document.querySelector('.user-text span').id;
  // const obj = JSON.parse(localStorage.getItem(user));
  // obj.funds = 100000;
  // localStorage.setItem(user, JSON.stringify(obj));
  const symbol = document.querySelector('#options').value;
  const cryptoList = await fetchCryptoList();
  const price = parseFloat(cryptoList.find(({ symbol: sy }) => sy === symbol).price);
  const valueInput = parseFloat(document.getElementById('input-value').value);
  
  const saldo = JSON.parse(localStorage.getItem('user')).funds;
  console.log(saldo);

  // if ( saldo >= valueInput) {
  //   localStorage.getItem('')
  //   localStorage.setItem('saldo', saldo - valueInput);
  //   console.log(saldo);
  //   const result = valueInput / price;
  //   console.log(result.toFixed(8));
  //   return result.toFixed(8);
  // }
}

// const sellCrypto = async (symbol) => {
  
// }