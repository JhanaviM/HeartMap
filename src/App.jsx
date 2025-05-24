import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Insights from './pages/Insights';
import Patterns from './pages/Patterns';
import ZoneCheck from './pages/ZoneCheck';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/zone-check" element={<ZoneCheck />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
