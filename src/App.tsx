import React from 'react';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Container from '@mui/material/Container';

function App() {
  return (
      <Container  maxWidth="lg">
         <Routes> 
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Container>
  );
}

export default App;
