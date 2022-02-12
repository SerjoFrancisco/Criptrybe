const cryptoList = document.getElementById('crypto-list');
const select = document.getElementById('options');

const createElement = (tag, ...classNames) => {
  const el = document.createElement(tag);
  if (classNames.length === 0) return el;
  el.className = classNames.join(' ');
  return el;
}

const listListener = (event) => {
  const targetId = event.target.dataset.symbol;
  const optionsChildren = Array.from(select.children);
  const toRemove = optionsChildren.find((child) => child.hasAttribute('selected'));
  if (toRemove) toRemove.removeAttribute('selected');
  select.querySelector(`.${targetId}`).setAttribute('selected', '');
}

const listCrypto = async () => {
  const carregando = createElement('div', 'carregando');
  carregando.innerText = 'Carregando...';
  cryptoList.appendChild(carregando);
  const list = await fetchCryptoList();
  document.querySelector('.carregando').remove();
  list.forEach(({ symbol, price }) => {
    const text = `<span data-symbol="${symbol}">${symbol.substring(0, symbol.length -3)}</span> ${parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    const li = createElement('li', 'item-list');
    li.innerHTML = text;
    li.dataset.symbol = symbol;
    li.addEventListener('click', listListener);
    cryptoList.appendChild(li);
  });
}

async function cryptOptions () {
  const list = await fetchCryptoList();
  list.forEach(({ symbol }) => {
    const option = createElement('option', symbol);
    option.value = symbol.substring(0, symbol.length -3);
    option.innerText = symbol.substring(0, symbol.length -3);
    select.appendChild(option);
  });
}

window.onload = async () => {
  await listCrypto();
  cryptOptions();
}