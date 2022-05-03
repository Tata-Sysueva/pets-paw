import React from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {ThemeProvider} from '../../contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
