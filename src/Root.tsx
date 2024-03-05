import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { DictionaryPage } from './pages/dictionary.page';
import { AddPage } from './pages/add.page';
import { MemorizationPage } from './pages/memorization.page';
import { Game } from './pages/memorization.page/game';
import { NotFoundPage } from './pages/not.found.page';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<DictionaryPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/memorization" element={<MemorizationPage />} />
        <Route path="/memorization/game" element={<Game />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
