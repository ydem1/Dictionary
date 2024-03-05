import { Header } from './components/header';

import './App.scss'
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
