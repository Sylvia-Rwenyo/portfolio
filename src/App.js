import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
