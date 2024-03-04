import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Root } from './Root';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <Provider store={store}>
    <Root />
  </Provider>
);