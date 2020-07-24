// import React from 'react';
// import ReactDOM from 'react-dom';
// import AddBookmark from './AddBookmark';

// it.skip('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AddBookmark />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import AddBookmark from './AddBookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    history: {
      push: () => {},
    },
  }
  ReactDOM.render(<AddBookmark {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});