import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      {/* Dynamic Background Particle Canvas */}
      <BackgroundParticles />

      {/* Collapsible Vertical Sidebar */}
      <Sidebar />

      {/* Main Display Area */}
      <div className="app-main">
        <Navbar />

        <main className="main-content-scroll">
          <AppRoutes />
        </main>

        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
