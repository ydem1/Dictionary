import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

import './App.scss'
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
