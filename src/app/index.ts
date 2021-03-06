const out = <Element>document.querySelector('#out');
const plus = <Element>document.querySelector('#plus');
const minus = <Element>document.querySelector('#minus');
const division = <Element>document.querySelector('#division');
const multiplication = <Element>document.querySelector('#multiplication');
const equal = <Element>document.querySelector('#equal');
const root = <Element>document.querySelector('#root');
const square = <Element>document.querySelector('#square');
const clear = <Element>document.querySelector('#clear');
const dot = <Element>document.querySelector('#dot');
const backspace = <Element>document.querySelector('#backspace');
const keyboard = <Element>document.querySelector('#keyboard');

const initialState = {
  operandFirst: 0,
  operation: true,
  result: 0,
  field: '0',
};

let state = { ...initialState };

type TypeState = typeof state;

updateOut(state);

keyboard.addEventListener('click', (event) => {
  const button = <Element>event.target;
  if (button.classList.contains('digital')) {
    if (state.operation) {
      state = {
        ...state,
        operation: false,
        field: '0',
      };
    }
    const symbol = button.textContent;
    if (symbol) {
      state = {
        ...state,
        field: state.field === '0' ? symbol : state.field + symbol,
      };
      updateOut(state);
    }
  }
});

backspace.addEventListener('click', () => {
  if (out.textContent) {
    out.textContent = out.textContent.slice(0, out.textContent.length - 1);
    state = {
      ...state,
      field: out.textContent === '' ? '0' : out.textContent,
    };
    updateOut(state);
  }
});

clear.addEventListener('click', () => {
  state = { ...initialState };
  updateOut(state);
});

dot.addEventListener('click', () => {
  state = {
    ...state,
    field: /\./.test(state.field) ? state.field : state.field + '.',
  };
  updateOut(state);
});

plus.addEventListener('click', () => {
  const operandFirst = state.operation ? state.operandFirst : Number(state.field);
  const result = state.result + operandFirst;
  const field = result.toString();

  state = {
    operandFirst,
    operation: true,
    result,
    field,
  };

  updateOut(state);
});

// minus.addEventListener('click', () => {
//   const operandFirst = state.operation ? state.operandFirst : Number(state.field);
//   const result = state.result - operandFirst;
//   const field = result.toString();

//   state = {
//     operandFirst,
//     operation: true,
//     result,
//     field,
//   };

//   updateOut(state);
// });

function updateOut({ field }: TypeState): void {
  out.textContent = field;
}
