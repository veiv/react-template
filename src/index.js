import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './util/theme.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App data-testid="appComponent" />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
