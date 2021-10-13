import React from 'react';
import * as StyledComponents from 'styled-components';
import { theme } from './theme';
import { FaBeer } from 'react-icons/fa';

import Button from './components/Button';

function App() {
  return (
    <StyledComponents.ThemeProvider theme={theme}>
      <Button bg="reds.4" fontSize="0" variant="outline" mb="10"><FaBeer /> red 6</Button>
      <Button bg="purples.4" fontSize="3" variant="outline" mb="10"><FaBeer /> purples</Button>
      <Button bg="reds.4" fontSize="0" mb="10"><FaBeer /> red 6</Button>
      <Button bg="purples.4" fontSize="3" mb="10"><FaBeer /> purples</Button>
      <Button bg="primary" fontSize="3" mb="10"><FaBeer /> purples</Button>
      <Button bg="secondary" fontSize="3" mb="10"><FaBeer /> purples</Button>
    </StyledComponents.ThemeProvider>
  );
}

export default App;
