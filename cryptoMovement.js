// const obj2 = JSON.parse(localStorage.getItem(user));
// obj2.funds = 100000;
// localStorage.setItem(user, JSON.stringify(obj2));
const buyCrypto = async () => {
  const user = document.querySelector('.user-text span').id;
  const symbol = document.querySelector('#options').value;
  const cryptoList = await fetchCryptoList();
  const price = parseFloat(cryptoList.find(({ symbol: sy }) => sy === symbol).price);
  const valueInput = parseFloat(document.getElementById('input-value').value);
  const obj = JSON.parse(localStorage.getItem(user));
  let { funds, positions } = obj;
  if ( funds >= valueInput) {
    funds -= valueInput;
    const result = valueInput / price;
    !positions[symbol] ? positions[symbol] = result : positions[symbol] += result;
    localStorage.setItem(user, JSON.stringify(obj));
    console.log(obj);
    return result.toFixed(8);
  }
}

// const sellCrypto = async (symbol) => {
  
// }