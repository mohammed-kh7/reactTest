import React from 'react';
import ReactDOM from 'react-dom/client';

const TestApp = () => {
  return React.createElement('div', null,
    React.createElement('h1', null, 'Hello World'),
    React.createElement('p', null, 'If you see this, React is working!')
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(TestApp, null)
  )
);
