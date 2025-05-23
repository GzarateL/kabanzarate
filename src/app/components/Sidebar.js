"use client";
import React from 'react';
import Link from 'next/link';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay para cerrar el sidebar en móviles */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
      
      {/* Botón de hamburguesa fuera del sidebar para cuando está cerrado */}
      {!isOpen && (
        <button 
          className="menu-toggle-button"
          onClick={toggleSidebar}
          aria-label="Abrir menú"
        >
          <span style={{ fontSize: '24px' }}>≡</span>
        </button>
      )}
      
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <span 
            style={{ fontSize: '24px' }} 
            onClick={toggleSidebar}
          >≡</span>
          <h1>Kanban</h1>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-item">
            <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>+</div>
            Crear
          </div>
          
          <Link href="/" className="menu-item">
            <div style={{ width: '24px', height: '24px', background: 'rgba(0,0,0,0)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </div>
            Home
          </Link>
          
          <div className="menu-category">Proyectos</div>
          <div className="sub-menu-item">Proyecto 1</div>
          <div className="sub-menu-item">Proyecto 2</div>
          
          <div className="menu-category">Tareas</div>
          <div className="sub-menu-item">Monitoreo</div>
          
          <div className="menu-category">Invitaciones</div>
        </div>
        
        <div className="bottom-menu">
          <div className="menu-item">
            <div style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            Configuración
          </div>
          <div className="menu-item">
            <div style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </div>
            Cerrar sesión
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;