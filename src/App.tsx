import React from 'react';
import { Header } from './common/components/header';
import { Footer } from './common/components/footer';

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
