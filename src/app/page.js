"use client";
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Manejar el sidebar en dispositivos móviles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Ejecutar una vez al cargar
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Dashboard sidebarOpen={sidebarOpen} />
    </>
  );
}