const colors = [
  'Aqua',
  'BurlyWood',
  'Crimson',
  'HoneyDew',
  'LightCyan'
];

// stolen from lodash _.random
function random(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

function clickHandler(itemId, event) {
  const el = event.target;
  const randomIndex = random(0, colors.length - 1);

  el.style['background-color'] = colors[randomIndex];
}

function createGridContainer(numColumns, numRows, colSize = '1fr', rowSize = '1fr') {
  const el = document.createElement('div');

  el.style.display = 'grid';
  el.style['grid-template-columns'] = `repeat(${numColumns}, ${colSize})`;
  el.style['grid-template-rows'] = `repeat(${numRows}, ${rowSize})`;

  el.style['min-height'] = '100vh';

  return el;
}

function createGridItem(colIndex, rowIndex, itemColor = 'red') {
  const el = document.createElement('div');

  el.style.border = `1px solid ${itemColor}`;
  el.style['grid-column-start'] = colIndex;
  el.style['grid-row-start'] = rowIndex;

  const className = `item-${colIndex}-${rowIndex}`;

  el.id = className;
  el.className = className;

  el.addEventListener('click', (e) => clickHandler(el.id, e));

  return el;
}

const numColumns = 6;
const numRows = 6;

(function() {
  const container = createGridContainer(numColumns, numRows, '1fr', '1fr');
  document.body.appendChild(container);

  for(let i = 1; i < numRows + 1; i++) {
    for(let k = 1; k < numColumns + 1; k++) {
      const item = createGridItem(k, i, '#ECECEC');
      container.appendChild(item);
    }
  }
})()