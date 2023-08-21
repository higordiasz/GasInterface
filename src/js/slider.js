const usedColor = 'var(--color-8)';
const range = document.getElementById('fuel');
const value = document.getElementById('value');
const priceElement = document.getElementById('price');
const currentValue = (range.value * 100) / range.max;
//  ((range.value - range.min) / (range.max - range.min)) * range.max;

const updateBackgroundColor = (value, color) => {
  range.style.setProperty(
    'background',
    `linear-gradient(to right,  ${color} 0%,  ${color}
     ${value}%,
     #fff ${value}%,
     #fff 100%)`,
  );
};

updateBackgroundColor(currentValue, usedColor);

range.addEventListener('input', function () {
  const updatedValue = (this.value * 100) / this.max;
  value.innerHTML = `${this.value} / ${this.max} LITERS`;
  var price = this.value * (values.getAttribute('data-type') == 1 ? values.getAttribute('data-price1') :
    values.getAttribute('data-type') == 2 ? values.getAttribute('data-price2') :
      values.getAttribute('data-type') == 3 ? values.getAttribute('data-price3') :
        values.getAttribute('data-price4')
  );
  values.setAttribute('data-price', price);
  priceElement.innerHTML = `R$ ${price},00`;

  updateBackgroundColor(updatedValue, usedColor);
});


function ajustValues() {
  const updatedValue = (range.value * 100) / range.max;
  value.innerHTML = `${range.value} / ${range.max} LITERS`;
  var price = range.value * (values.getAttribute('data-type') == 1 ? values.getAttribute('data-price1') :
    values.getAttribute('data-type') == 2 ? values.getAttribute('data-price2') :
      values.getAttribute('data-type') == 3 ? values.getAttribute('data-price3') :
        values.getAttribute('data-price4')
  );
  values.setAttribute('data-price', price);
  priceElement.innerHTML = `R$ ${price},00`;

  updateBackgroundColor(updatedValue, usedColor);
}
