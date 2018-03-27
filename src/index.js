import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom'; 

const Appp = () => (
  <MuiThemeProvider>
    
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
    <BrowserRouter>
      <Appp />
    </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
