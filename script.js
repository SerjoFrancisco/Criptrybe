const cryptoList = document.getElementById('crypto-list');

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
    const text = `${symbol} Price: ${price}`;
    const li = createElement('li', 'item-list');
    li.innerText = text;
    cryptoList.appendChild(li);
  });
}

window.onload = async () => {
  await listCrypto();
  // await fetchCryptoList();
  console.log(await fetchCrypto('BTCBRL'));
}