import React from 'react'; // Eliminado useState ya que el toggleTheme se mueve al Navbar
import { FiHardDrive, FiUser } from 'react-icons/fi'; // Importing icons, ahora con FiHardDrive y FiUser
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Importar iconos de redes sociales
import TypingEffect from './TypingEffect'; // Importar el nuevo componente de efecto de escritura

import { motion } from 'framer-motion'; // Importar motion de framer-motion

const Inicio: React.FC = () => {
  // Eliminado el estado y la función toggleTheme ya que ahora se maneja en Navbar

  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center text-white p-4 pt-16"> {/* Reducido pt-24 a pt-16 */}
      {/* Background elements (stars/patterns) - for illustration, these would typically be more complex CSS or SVG */}
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar con Framer Motion */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: ["-10px", "10px", "-10px"] }} /* Añadida animación de flotación */
          transition={{ duration: 0.5, ease: "easeOut", y: { duration: 4, ease: "easeInOut", repeat: Infinity } }} /* Transición para la flotación */
          whileHover={{ scale: 1.05 }} /* Efecto de escala al pasar el ratón, sin sombra */
          className="relative w-48 h-48 mb-8 flex items-center justify-center overflow-hidden" /* Eliminado fondo, glow-effect, y centrado */
        >
          <img
            src={import.meta.env.BASE_URL + 'images/emoji_avatar.png'} // Ruta actualizada para Vite con BASE_URL
            alt="Emoji Avatar"
            className="w-full h-full object-contain" /* Revertido a object-contain */
          />
        </motion.div>

        {/* Status Badge - Eliminado */}
        {/* Main Content */}
        <TypingEffect text="Hi, I'm  Dhilsen Mallqui" nameColor="text-blue-300" />
        <p className="text-2xl md:text-3xl font-bold text-white mt-0 mb-6 text-center">FrontEnd Developer</p> {/* Ajustado mb */}
        {/* Eliminado el párrafo: "Estudiante de Ingeniería de software..." */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm mx-auto mt-4"> {/* Ajustado mt */}
          <a
            href="#proyectos"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center group w-72 mx-auto" /* Cambiado a rounded-lg */
          >
            Descargar CV <FiHardDrive className="ml-2 group-hover:translate-y-1 transition-transform duration-200" /> {/* Icono cambiado a FiHardDrive */}
          </a>
          <a
            href="#educacion" // Enlaza a la sección de educación
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center group w-60 mx-auto mt-4 sm:mt-0" /* Color cambiado a indigo-600 y redondeo a rounded-lg */
          >
            Conóceme <FiUser className="ml-2 group-hover:translate-y-1 transition-transform duration-200" /> {/* Texto e icono cambiados a Conóceme y FiUser */}
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-8 mb-32 text-white"> {/* Ajustado mb para más separación */}
          <a href="https://github.com/Dhilsen18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dhilsenmallqui" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
            <FaLinkedinIn size={30} />
          </a>
          <a href="mailto:dhilsenamv@gmail.com" className="hover:text-blue-200 transition-colors duration-200">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
      {/* Removed Educacion component to avoid duplication */}
      {/* Removed Intereses component to avoid duplication */}
    </section>
  );
};

export default Inicio;
