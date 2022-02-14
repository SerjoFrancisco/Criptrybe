// const obj2 = JSON.parse(localStorage.getItem(user));
// obj2.funds = 100000;
// localStorage.setItem(user, JSON.stringify(obj2));
const historic = document.getElementById('historic');
const printHistoric = (symbol, coinsAmount, currentPrice, value) => {
  const currentPriceBR = currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const valueBR = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const div = createElement('div');
  div.innerText = `Compra: ${symbol}: ${coinsAmount.toFixed(8)}
  Preço: ${currentPriceBR} Valor da compra: ${valueBR}`;
  historic.appendChild(div);
}

const buyCrypto = async () => {
  const user = document.querySelector('.user-text span').id;
  const symbol = document.querySelector('#options').value;
  const cryptoList = await fetchCryptoList();
  const price = parseFloat(cryptoList.find(({ symbol: sy }) => sy === symbol).price);
  const valueInput = parseFloat(document.getElementById('input-value').value);
  const obj = JSON.parse(localStorage.getItem(user));
  if ( obj.funds >= valueInput) {
    obj.funds -= valueInput;
    const result = valueInput / price;
    !obj.positions[symbol] ? obj.positions[symbol] = result : obj.positions[symbol] += result;
    localStorage.setItem(user, JSON.stringify(obj));
    printHistoric(symbol, result, price, valueInput);
    return result.toFixed(8);
  }
}
