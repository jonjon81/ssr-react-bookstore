import { createRoot } from 'react-dom/client';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
