const cryptoList = document.getElementById('crypto-list');
const select = document.getElementById('options');

const createElement = (tag, ...classNames) => {
  const el = document.createElement(tag);
  if (classNames.length === 0) return el;
  el.className = classNames.join(' ');
  return el;
}

const listCrypto = async () => {
  const carregando = createElement('div', 'carregando');
  carregando.innerText = 'Carregando...';
  cryptoList.appendChild(carregando);
  const list = await fetchCryptoList();
  document.querySelector('.carregando').remove();
  list.forEach(({ symbol, price }) => {
    const text = `${symbol.substring(0, symbol.length -3)} ${parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    const li = createElement('li', 'item-list');
    li.innerText = text;
    cryptoList.appendChild(li);
  });
}

async function cryptOptions () {
  const list = await fetchCryptoList();
  list.forEach(({ symbol }) => {
    const option = createElement('option');
    option.value = symbol.substring(0, symbol.length -3);
    option.innerText= symbol.substring(0, symbol.length -3);
    select.appendChild(option);
  });
}

window.onload = async () => {
  await listCrypto();
  // await fetchCryptoList();
  console.log(await fetchCrypto('BTCBRL'));
  cryptOptions()
}