import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/appcomponent';

var list = [
  { id: 1, text: 'Joe' },
  { id: 2, text: 'Moe' },
  { id: 3, text: 'Loe' },
  { id: 4, text: 'Chloe' },
  { id: 5, text: 'Doe' },
  { id: 6, text: 'Zoe' }
]

ReactDOM.render(
  <App items={list} />,
  document.getElementById('app')
);
