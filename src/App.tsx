import React, { lazy, Suspense } from 'react'; // Restaurada la importación de lazy y Suspense
import Navbar from './components/Navbar'; // Importar el componente Navbar
import LoadingFallback from './components/LoadingFallback'; // Importar el nuevo componente de fallback

// Carga diferida de componentes
const Inicio = lazy(() => import('./components/Inicio'));
const Educacion = lazy(() => import('./components/Educacion'));
const Competencia = lazy(() => import('./components/Competencia'));
const Experiencia = lazy(() => import('./components/Experiencia'));
const Proyectos = lazy(() => import('./components/Proyectos'));
const Intereses = lazy(() => import('./components/Intereses')); // Importar el nuevo componente Intereses

function App() {
  return (
    <div className="App"> {/* Revertido el fondo global a su estado original */}
      <Navbar /> {/* Renderizar el Navbar */}
      <Suspense fallback={<LoadingFallback />}>
        <Inicio />
        <Educacion className="mb-4" /> {/* Restaurado mb-4 */}
        <Intereses /> {/* Renderizar el componente Intereses aquí */}
        <Competencia />
        <Experiencia />
        <Proyectos />
      </Suspense>
    </div>
  );
}

export default App;
