import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './Store/reduxIndex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
