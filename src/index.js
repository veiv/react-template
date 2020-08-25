import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './util/theme.js';

import App from 'components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App data-testid="appComponent" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
