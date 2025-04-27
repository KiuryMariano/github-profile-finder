import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileCardTailwind from './pages/GitHubProfileTailwind';
import ProfileCardStyled from './pages/GitHubProfileStyled';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<ProfileCardTailwind />} />
        <Route path="/styled" element={<ProfileCardStyled />} />
      </Routes>
    </Router>
  );
};

export default App;
