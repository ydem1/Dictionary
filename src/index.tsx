import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { Root } from './Root';


const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <Provider store={store}>
    <Root />
  </Provider>
);