"use client";
import React from 'react';
import { useTheme } from './ThemeProvider';

const Dashboard = ({ sidebarOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
      <div className="top-bar">
        <h1>Home</h1>
        <div className="top-bar-center">
          <input type="text" className="search-bar" placeholder="Buscar..." />
          
          {/* Botón para alternar tema */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
        
        <div className="user-profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      
      <div className="cards-container">
        <div className="info-card blue">
          <strong>Total de proyectos activos</strong>
          <span style={{ fontSize: '24px', marginTop: '5px' }}>12</span>
        </div>
        <div className="info-card black">
          <strong>Cantidad de aulas asignadas</strong>
          <span style={{ fontSize: '24px', marginTop: '5px' }}>8</span>
        </div>
        <div className="info-card blue">
          <strong>Tareas pendientes por revisar</strong>
          <span style={{ fontSize: '24px', marginTop: '5px' }}>25</span>
        </div>
        <div className="info-card black">
          <strong>Total de proyectos activos</strong>
          <span style={{ fontSize: '24px', marginTop: '5px' }}>12</span>
        </div>
      </div>
      
      <div className="projects-section">
        <div className="project-card">
          <h2>Proyectos Activos</h2>
          <p>Lista de todos los proyectos actualmente en progreso...</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <h2>Proyectos Activos</h2>
            <p>Detalles del primer conjunto de proyectos...</p>
          </div>
          <div className="project-card">
            <h2>Proyectos Activos</h2>
            <p>Detalles del segundo conjunto de proyectos...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;