import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './store';
import theme from './theme';
import './index.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root'),
);
