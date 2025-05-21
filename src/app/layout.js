import './globals.css';

export const metadata = {
  title: 'Kanban App',
  description: 'Réplica exacta de la aplicación Kanban',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          {children}
        </div>
      </body>
    </html>
  );
}