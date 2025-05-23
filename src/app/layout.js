import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata = {
  title: 'Kanban App',
  description: 'Aplicación Kanban con tema claro/oscuro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <div className="layout">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}