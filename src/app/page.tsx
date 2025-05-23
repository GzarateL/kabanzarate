// page.tsx
"use client";
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './components/ThemeProvider';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Dashboard sidebarOpen={sidebarOpen} />
    </ThemeProvider>
  );
}