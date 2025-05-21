import React from 'react';

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="top-bar">
        <h1>Home</h1>
        <input type="text" className="search-bar" placeholder="" />
        <div className="user-profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      
      <div className="cards-container">
        <div className="info-card blue">
          Total de proyectos activos
        </div>
        <div className="info-card black">
          Cantidad de aulas asignadas
        </div>
        <div className="info-card blue">
          Tareas pendientes por revisar
        </div>
        <div className="info-card black">
          Total de proyectos activos
        </div>
      </div>
      
      <div className="projects-section">
        <div className="project-card">
          <h2>Proyectos Activos</h2>
          {/* Contenido de proyectos activos */}
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <h2>Proyectos Activos</h2>
            {/* Contenido de la primera tarjeta de proyectos */}
          </div>
          <div className="project-card">
            <h2>Proyectos Activos</h2>
            {/* Contenido de la segunda tarjeta de proyectos */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;