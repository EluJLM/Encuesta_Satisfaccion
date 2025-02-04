import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Satisfaccion from './pages/Satisfaccion/Satisfaccion';
import UrlGenerador from './pages/UrlGenerador/UrlGenerador';
import './App.css';
import SurveyImportance from './pages/SurveyImportance/SurveyImportance';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/generar-tokens" className="nav-link">Generar Tokens</Link></li>
            <li><a href="https://wa.me/573169525151" target="_blank" rel="noopener noreferrer" className="nav-link">WhatsApp</a></li>
            <li><a href="https://enlade.web.app" target="_blank" rel="noopener noreferrer" className="nav-link">Mi Web</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<SurveyImportance />} />
          <Route path="/generar-tokens" element={<UrlGenerador />} />
          <Route path="/satisfaccion" element={<Satisfaccion />} ></Route>
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">&copy; 2025 - Todos los derechos reservados.</p>
            <p className="footer-message">¡Gracias por visitar nuestra aplicación!</p>
            <div className="footer-buttons">
              <a href="https://wa.me/573169525151" target="_blank" rel="noopener noreferrer" className="footer-button">WhatsApp</a>
              <a href="https://enlade.web.app" target="_blank" rel="noopener noreferrer" className="footer-button">Visitar Web</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;