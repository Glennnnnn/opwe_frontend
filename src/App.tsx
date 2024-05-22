import React from 'react';
import logo from './logo.svg';
import { Navigate, Link, Route, Routes, Router } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ConsentPage from './pages/ConsentPage';
function App() {
  return (
    <div className="App">
      <Link to="/">BBBBBBB</Link>
      <br></br>
      <Link to="/blogPage">BlogPage</Link>
      <br></br>
      <Link to="/loginPage">LoginPage</Link>
      <br></br>
      <Link to="/consentPage">ConsentPage</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/consentPage" element={<ConsentPage />} />
      </Routes>
    </div >
  );
}

export default App;
