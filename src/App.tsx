import { lazy, Suspense, useState, useEffect } from 'react'; // Restaurada la importación de lazy y Suspense y añadidos useState, useEffect
import Navbar from './components/Navbar'; // Importar el componente Navbar
import LoadingFallback from './components/LoadingFallback'; // Importar el nuevo componente de fallback

// Carga diferida de componentes
const Inicio = lazy(() => import('./components/Inicio'));
const Educacion = lazy(() => import('./components/Educacion'));
const Competencia = lazy(() => import('./components/Competencia'));
const Experiencia = lazy(() => import('./components/Experiencia'));
const Proyectos = lazy(() => import('./components/Proyectos'));
const Intereses = lazy(() => import('./components/Intereses')); // Importar el nuevo componente Intereses
// const AboutMe = lazy(() => import('./components/AboutMe')); // Eliminado: Importar el nuevo componente AboutMe

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App min-h-screen"> {/* Clases de fondo y texto gestionadas por index.css */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} /> {/* Renderizar el Navbar y pasar toggleTheme y currentTheme */}
      <Suspense fallback={<LoadingFallback />}>
        <Inicio currentTheme={theme} />
        <Educacion className="mb-4" currentTheme={theme} /> {/* Restaurado mb-4 y añadido currentTheme */}
        {/* <AboutMe /> */}
        <Intereses currentTheme={theme} /> {/* Renderizar el componente Intereses aquí */}
        <Competencia currentTheme={theme} />
        <Experiencia currentTheme={theme} />
        <Proyectos currentTheme={theme} />
      </Suspense>
    </div>
  );
}

export default App;
