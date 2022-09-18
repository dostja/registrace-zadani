import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
    <h1>Registration form</h1>
    <Registration/>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
