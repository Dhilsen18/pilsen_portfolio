import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importar motion de framer-motion
import { FiMenu, FiX, FiUser } from 'react-icons/fi'; // Importar iconos de menú, cerrar y usuario

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>('inicio'); // Estado para el enlace activo, inicialmente 'inicio'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [scrolled, setScrolled] = useState(false); // Nuevo estado para detectar el scroll

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  useEffect(() => {
    const sections = [
      { id: 'inicio' },
      { id: 'educacion' },
      { id: 'competencia' },
      { id: 'experiencia' },
      { id: 'proyectos' },
    ];
    const navbarHeight = 64; // Altura aproximada de tu Navbar, ajusta si es necesario

    const handleScroll = () => {
      let currentActiveLink: string | null = null;
      let closestTop = Infinity; // Para encontrar la sección más cercana a la parte superior

      // Actualizar el estado de scroll
      setScrolled(window.scrollY > 50); // Si se ha desplazado más de 50px

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY; // Posición absoluta del inicio de la sección
          const bottom = rect.bottom + window.scrollY; // Posición absoluta del final de la sección

          const viewportTop = window.scrollY + navbarHeight; // Parte superior del viewport ajustada por el navbar
          const viewportBottom = window.scrollY + window.innerHeight; // Parte inferior del viewport

          // Verificar si la sección está al menos parcialmente visible dentro del viewport, sin contar el navbar
          if (bottom > viewportTop && top < viewportBottom) {
            // Si esta sección está más cerca de la parte superior del viewport (justo debajo del navbar)
            if (top < closestTop) {
              closestTop = top;
              currentActiveLink = section.id;
            }
          }
        }
      });

      if (currentActiveLink) {
        setActiveLink(currentActiveLink);
      }
    };

    // Debounce para optimizar el evento scroll
    const debounce = (func: Function, delay: number) => {
      let timeout: ReturnType<typeof setTimeout>;
      return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // 100ms de retardo

    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Ejecutar una vez al montar para establecer el estado inicial

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []); // El array de dependencias vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-transparent transition-colors duration-300 md:bg-transparent"> {/* Fondo transparente para móvil y desktop */}
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        {/* Portfolio - Izquierda */}
        <a href="#inicio" className="text-white text-2xl font-bold">Portfolio</a>

        {/* Botón de Menú Móvil / Hamburguesa (Se elimina el botón de tema) */}
        <div className="flex items-center md:hidden z-50"> {/* Añadido z-50 */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Enlaces de Navegación - Centrados con fondo animado (Desktop) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:flex bg-transparent backdrop-filter backdrop-blur-lg rounded-full p-2 items-center space-x-2 shadow-lg mx-auto"> {/* Centrar con mx-auto, cambiado a bg-transparent */}
          
          <motion.a
            href="#inicio"
            onClick={() => handleLinkClick('inicio')}
            className={`px-4 py-2 rounded-full flex items-center justify-center
                        ${activeLink === 'inicio'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Inicio
          </motion.a>

          <motion.a
            href="#educacion"
            onClick={() => handleLinkClick('educacion')}
            className={`px-4 py-2 rounded-full flex items-center justify-center
                        ${activeLink === 'educacion'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Educación
          </motion.a>

          <motion.a
            href="#competencia"
            onClick={() => handleLinkClick('competencia')}
            className={`px-4 py-2 rounded-full flex items-center justify-center
                        ${activeLink === 'competencia'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Competencias
          </motion.a>

          <motion.a
            href="#experiencia"
            onClick={() => handleLinkClick('experiencia')}
            className={`px-4 py-2 rounded-full flex items-center justify-center
                        ${activeLink === 'experiencia'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Experiencia
          </motion.a>

          <motion.a
            href="#proyectos"
            onClick={() => handleLinkClick('proyectos')}
            className={`px-4 py-2 rounded-full flex items-center justify-center
                        ${activeLink === 'proyectos'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Proyectos
          </motion.a>
        </motion.div>

        {/* Se elimina el Botón de Tema (Sol/Luna) */}
        <motion.button
          className="hidden md:flex p-2 rounded-full text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiUser size={24} />
        </motion.button>
      </div>

      {/* Menú Móvil - Aparece cuando isMobileMenuOpen es true */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-16 left-4 right-4 rounded-xl p-4 flex flex-col items-center space-y-4 shadow-lg z-40 transition-colors duration-300 bg-indigo-900/80 backdrop-filter backdrop-blur-lg`}> {/* Ancho extendido, con esquinas redondeadas, fondo semi-transparente */}
          <motion.a
            href="#inicio"
            onClick={() => { handleLinkClick('inicio'); setIsMobileMenuOpen(false); }}
            className={`w-full text-center px-4 py-3 rounded-lg
                        ${activeLink === 'inicio'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Inicio
          </motion.a>
          <motion.a
            href="#educacion"
            onClick={() => { handleLinkClick('educacion'); setIsMobileMenuOpen(false); }}
            className={`w-full text-center px-4 py-3 rounded-lg
                        ${activeLink === 'educacion'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Educación
          </motion.a>
          <motion.a
            href="#competencia"
            onClick={() => { handleLinkClick('competencia'); setIsMobileMenuOpen(false); }}
            className={`w-full text-center px-4 py-3 rounded-lg
                        ${activeLink === 'competencia'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Competencias
          </motion.a>
          <motion.a
            href="#experiencia"
            onClick={() => { handleLinkClick('experiencia'); setIsMobileMenuOpen(false); }}
            className={`w-full text-center px-4 py-3 rounded-lg
                        ${activeLink === 'experiencia'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Experiencia
          </motion.a>
          <motion.a
            href="#proyectos"
            onClick={() => { handleLinkClick('proyectos'); setIsMobileMenuOpen(false); }}
            className={`w-full text-center px-4 py-3 rounded-lg
                        ${activeLink === 'proyectos'
                          ? 'bg-[rgba(32,32,64,0.7)] text-white shadow-md border border-indigo-500'
                          : 'text-gray-200 hover:bg-[rgba(48,48,80,0.6)] hover:text-white hover:shadow-md'
                        }`}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Proyectos
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
