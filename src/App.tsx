import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './frontend/pages/LoginPage/LoginPage';
import CabinetPage from './frontend/pages/CabinetPage/CabinetPage';
import TeamPage from './frontend/pages/TeamPage/TeamPage';
import Uploads from './frontend/pages/Uploads/Uploads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cabinet" element={<CabinetPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;