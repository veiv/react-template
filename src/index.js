import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './util/theme.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App data-testid="appComponent" />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
