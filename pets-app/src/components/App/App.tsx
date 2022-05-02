import React from 'react';
import MainLayout from '../../layouts/main-layout/MainLayout';
import {ThemeProvider} from '../../contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
