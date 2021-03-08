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

const initialState: TypeState = {
  operandFirst: 0,
  operandSecond: 0,
  error: false,
  isDot: false,
  result: 0,
  field: '0',
};

let state: TypeState = { ...initialState };

type TypeState = {
  operandFirst: number;
  operandSecond: number;
  error: boolean;
  isDot: boolean;
  result: number;
  field: string;
};

updateOut(state);

keyboard.addEventListener('click', (event) => {
  const button = <Element>event.target;
  if (button.classList.contains('digital')) {
    if (state.error) {
      state = {
        ...state,
        error: false,
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
  if (state.error) {
    return;
  } else {
    state = {
      ...state,
      field: state.isDot ? state.field : state.field + '.',
      isDot: true,
    };
    updateOut(state);
  }
});

plus.addEventListener('click', () => {
  if (state.error) {
    return;
  } else {
    state = {
      ...state,
      isDot: false,
      field: setOpator(state.field, '+'),
    };
    updateOut(state);
  }
});

minus.addEventListener('click', () => {
  if (state.error) {
    return;
  } else {
    state = {
      ...state,
      isDot: false,
      field: setOpator(state.field, '-'),
    };
    updateOut(state);
  }
});

multiplication.addEventListener('click', () => {
  if (state.error) {
    return;
  } else {
    state = {
      ...state,
      isDot: false,
      field: setOpator(state.field, '*'),
    };
    updateOut(state);
  }
});

division.addEventListener('click', () => {
  if (state.error) {
    return;
  } else {
    state = {
      ...state,
      isDot: false,
      field: setOpator(state.field, '/'),
    };
    updateOut(state);
  }
});

equal.addEventListener('click', () => {
  if (/[\+\-\*\/]$/.test(state.field) || state.error) {
    state = {
      ...state,
      isDot: false,
      field: 'Error',
      error: true,
    };
    updateOut(state);
  } else {
    const field: string = eval(state.field);
    state = {
      ...state,
      isDot: false,
      field,
    };
    updateOut(state);
  }
});

function updateOut({ field }: TypeState): void {
  out.textContent = field;
}

function setOpator(field: string, opator: string) {
  return /[\+\-\*\/\.]$/.test(field) ? field : field + opator;
}
