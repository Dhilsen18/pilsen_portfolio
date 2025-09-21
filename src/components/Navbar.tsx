import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importar motion de framer-motion
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'; // Importar iconos de menú, cerrar, sol y luna

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme }) => {
  const [activeLink, setActiveLink] = useState<string>('inicio'); // Estado para el enlace activo, inicializado en 'inicio'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [hasScrolled, setHasScrolled] = useState(false); // Nuevo estado para detectar si se ha hecho scroll
  
  const getInactiveLinkClasses = (isMobile: boolean) => {
    const baseClasses = isMobile ? 'px-4 py-3 rounded-lg' : 'px-4 py-2 rounded-full';
    if (currentTheme === 'light') {
      return `${baseClasses} border-transparent text-gray-900 hover:text-gray-900 ${isMobile ? 'hover:bg-gray-200' : ''}`;
    } else {
      return `${baseClasses} border-transparent text-white hover:text-white ${isMobile ? 'dark:hover:bg-gray-700' : ''}`;
    }
  };
  
  const getActiveLinkClasses = (isMobile: boolean) => {
    const baseClasses = isMobile ? 'px-4 py-3 rounded-lg' : 'px-4 py-2 rounded-full';
    if (currentTheme === 'light') {
      return `${baseClasses} border-emerald-600 text-gray-900` + (isMobile ? ' bg-transparent' : ''); // Borde verde esmeralda para modo claro
    } else {
      return `${baseClasses} border-emerald-400 text-white` + (isMobile ? ' bg-transparent' : ''); // Borde verde esmeralda para modo oscuro
    }
  };
  
  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false); // Cerrar el menú móvil al seleccionar un enlace
  };

  // Nuevo useEffect para manejar el desplazamiento y actualizar el enlace activo
  useEffect(() => {
    const scrollOffset = 80; // Altura de la barra de navegación o un offset para la detección

    // Función de debounce
    const debounce = (func: (...args: any[]) => void, delay: number) => {
      let timeout: NodeJS.Timeout;
      return function(this: any, ...args: any[]) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    };

    const handleScroll = () => {
      const sections = ['inicio', 'educacion', 'competencia', 'experiencia', 'proyectos'];
      let currentActiveLink = 'inicio';

      // Iterar secciones de arriba hacia abajo
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Una sección es activa si su parte superior está en o por encima del scrollOffset
          // y la parte superior de la *siguiente* sección (si existe) aún no ha llegado a ese offset
          const nextSection = document.getElementById(sections[i + 1]);
          const nextRectTop = nextSection ? nextSection.getBoundingClientRect().top : Infinity; // Si no hay siguiente, consideramos infinito

          if (rect.top <= scrollOffset && nextRectTop > scrollOffset) {
            currentActiveLink = sectionId;
            break; // Encontramos la sección activa, salimos
          }
        }
      }

      // Si estamos muy al inicio de la página, asegurar que 'inicio' esté activo
      if (window.scrollY === 0) {
        currentActiveLink = 'inicio';
      }
      setHasScrolled(window.scrollY > 0); // Actualizar el estado hasScrolled

      setActiveLink(currentActiveLink);
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);
    debouncedHandleScroll(); // Ejecutar una vez al montar para establecer el enlace activo inicial

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute una sola vez al montar

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-transparent transition-colors duration-300"> {/* Fondo transparente para móvil y desktop */}
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        {/* Portfolio - Siempre visible en todos los modos */}
        <a href="#inicio" className="text-current text-2xl font-bold">Portfolio</a>

        {/* Contenedor para botones de móvil: se vuelve semi-transparente al hacer scroll */}
        <motion.div
          className="flex items-center md:hidden z-50 transition-colors duration-300 bg-transparent p-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {/* Botón de Tema (Sol/Luna) para Móvil */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full text-current hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none mr-2"
            whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
            whileTap={{ scale: 0.9, backgroundColor: "transparent" }}
          >
            {currentTheme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />} {/* Icono de sol/luna */}
          </motion.button>
          {/* Botón de Menú Móvil / Hamburguesa */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-current hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none ml-2"
            whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
            whileTap={{ scale: 0.9, backgroundColor: "transparent" }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </motion.div>

        {/* Enlaces de Navegación - Centrados con fondo animado (Desktop) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden md:flex items-center space-x-6 mx-auto bg-white/10 dark:bg-gray-800/20 backdrop-filter backdrop-blur-lg rounded-full p-3 shadow-lg"> {/* Fondo semi-transparente, blur, redondeado y con sombra */}
          
          <motion.a
            href="#inicio"
            onClick={() => handleLinkClick('inicio')}
            className={`flex items-center justify-center border-2
                        ${activeLink === 'inicio' 
                          ? getActiveLinkClasses(false) 
                          : getInactiveLinkClasses(false)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Inicio
          </motion.a>

          <motion.a
            href="#educacion"
            onClick={() => handleLinkClick('educacion')}
            className={`flex items-center justify-center border-2
                        ${activeLink === 'educacion' 
                          ? getActiveLinkClasses(false) 
                          : getInactiveLinkClasses(false)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Educación
          </motion.a>

          <motion.a
            href="#competencia"
            onClick={() => handleLinkClick('competencia')}
            className={`flex items-center justify-center border-2
                        ${activeLink === 'competencia' 
                          ? getActiveLinkClasses(false) 
                          : getInactiveLinkClasses(false)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Competencias
          </motion.a>

          <motion.a
            href="#experiencia"
            onClick={() => handleLinkClick('experiencia')}
            className={`flex items-center justify-center border-2
                        ${activeLink === 'experiencia' 
                          ? getActiveLinkClasses(false) 
                          : getInactiveLinkClasses(false)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Experiencia
          </motion.a>

          <motion.a
            href="#proyectos"
            onClick={() => handleLinkClick('proyectos')}
            className={`flex items-center justify-center border-2
                        ${activeLink === 'proyectos' 
                          ? getActiveLinkClasses(false) 
                          : getInactiveLinkClasses(false)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: 0 }}
          >
            Proyectos
          </motion.a>

        </motion.div>

        {/* Botón de Tema (Sol/Luna) para Desktop */}
        <motion.button
          onClick={toggleTheme}
          className="hidden md:flex p-2 rounded-full text-current hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none"
          whileHover={{ scale: 1.1, backgroundColor: "transparent" }}
          whileTap={{ scale: 0.9, backgroundColor: "transparent" }}
        >
          {currentTheme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />} {/* Icono de sol/luna */}
        </motion.button>
      </div>

      {/* Menú Móvil - Aparece cuando isMobileMenuOpen es true */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-16 left-6 right-6 rounded-xl p-4 flex flex-col items-center space-y-4 z-40 transition-colors duration-300 ${hasScrolled ? 'bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
          <motion.a
            href="#inicio"
            onClick={() => handleLinkClick('inicio')}
            className={`w-full text-center px-4 py-3 rounded-lg border-2
                        ${activeLink === 'inicio' 
                          ? getActiveLinkClasses(true) 
                          : getInactiveLinkClasses(true)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inicio
          </motion.a>
          <motion.a
            href="#educacion"
            onClick={() => handleLinkClick('educacion')}
            className={`w-full text-center px-4 py-3 rounded-lg border-2
                        ${activeLink === 'educacion' 
                          ? getActiveLinkClasses(true) 
                          : getInactiveLinkClasses(true)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Educación
          </motion.a>
          <motion.a
            href="#competencia"
            onClick={() => handleLinkClick('competencia')}
            className={`w-full text-center px-4 py-3 rounded-lg border-2
                        ${activeLink === 'competencia' 
                          ? getActiveLinkClasses(true) 
                          : getInactiveLinkClasses(true)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Competencias
          </motion.a>
          <motion.a
            href="#experiencia"
            onClick={() => handleLinkClick('experiencia')}
            className={`w-full text-center px-4 py-3 rounded-lg border-2
                        ${activeLink === 'experiencia' 
                          ? getActiveLinkClasses(true) 
                          : getInactiveLinkClasses(true)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experiencia
          </motion.a>
          <motion.a
            href="#proyectos"
            onClick={() => handleLinkClick('proyectos')}
            className={`w-full text-center px-4 py-3 rounded-lg border-2
                        ${activeLink === 'proyectos' 
                          ? getActiveLinkClasses(true) 
                          : getInactiveLinkClasses(true)}
                        `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proyectos
          </motion.a>
           {/* Botón de Tema (Sol/Luna) para móvil - REMOVED */}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;