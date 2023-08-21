const buttons = [
  document.getElementById('bt_1'),
  document.getElementById('bt_2'),
  document.getElementById('bt_3'),
  document.getElementById('bt_4')
];
const values = document.getElementById('values');
const tank_prices = [
  document.getElementById('price-tank1'),
  document.getElementById('price-tank2'),
  document.getElementById('price-tank3'),
  document.getElementById('price-tank4')
];

const liquid_prices = [
  values.getAttribute('data-price1'),
  values.getAttribute('data-price2'),
  values.getAttribute('data-price3'),
  values.getAttribute('data-price4')
];

function bt_click(element, type) {
  for (var i = 0; i < buttons.length; i++)
    buttons[i].classList.remove('bt-selected');
  element.classList.add('bt-selected');
  values.setAttribute('data-type', element.getAttribute('data-liquid'));
  ajustValues();
};

window.onload = function () {
  ajustValues();
  for (var i = 0; i < tank_prices.length; i++)
    tank_prices[i].innerHTML = `R$${liquid_prices[i]} / Liter`;
};
