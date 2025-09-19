import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa'; // Iconos para universidad y graduación
import { motion } from 'framer-motion'; // Importar motion para las animaciones

// Definición de props para el componente Educacion
interface EducacionProps {
  className?: string; // Propiedad className opcional para TailwindCSS u otros estilos
}

const Educacion: React.FC<EducacionProps> = ({ className }) => {
  return (
    <section id="educacion" className={`py-8 bg-transparent text-white scroll-mt-16 ${className || ''}`}> {/* Añadido scroll-mt-16 */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Educación</h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Reducir el ancho máximo del contenedor de la cuadrícula y centrarla */}
          {/* Tarjeta de Educación UPC */}
          <motion.div
            className="relative rotating-border-light flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between text-white bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
              style={{ transform: 'none' }} /* Asegura que el contenido interno no rote */
            >
              <div className="relative"> {/* Contenedor relativo para el posicionamiento absoluto del icono */}
                <div className="absolute top-0 right-0 p-2"> {/* Posiciona el icono en la esquina superior derecha */}
                  <FaUniversity size={28} className="text-white opacity-75" /> {/* Icono de universidad con opacidad */}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">UPC - Universidad Peruana de<br/>Ciencias Aplicadas</h3> {/* Salto de línea movido */}
                <p className="text-gray-400 text-sm mb-1">Marzo 2023 – En curso (6to ciclo)</p>
                <p className="text-gray-300 mb-6">Ingeniería de Software</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700"> {/* Separador superior y padding */}
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-3 py-1 rounded-full text-xs font-medium opacity-85 cursor-pointer" /* Añadido cursor-pointer */
                >Desarrollo de Software</motion.span> {/* Color y opacidad ajustados */}
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-3 py-1 rounded-full text-xs font-medium opacity-85 cursor-pointer" /* Añadido cursor-pointer */
                >Gestión de Proyectos</motion.span> {/* Color y opacidad ajustados */}
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta de Certificación de Idiomas */}
          <motion.div
            className="relative rotating-border-light flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between text-white bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
              style={{ transform: 'none' }} /* Asegura que el contenido interno no rote */
            >
              <div className="relative"> {/* Contenedor relativo para el posicionamiento absoluto del icono */}
                <div className="absolute top-0 right-0 p-2"> {/* Posiciona el icono en la esquina superior derecha */}
                  <FaGraduationCap size={28} className="text-white opacity-75" /> {/* Icono de graduación con opacidad */}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">ICPNA</h3>
                <p className="text-gray-400 text-sm mb-1">Septiembre 2024 – Junio 2025</p>
                <p className="text-gray-300 mb-6">Inglés</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700"> {/* Separador superior y padding */}
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-3 py-1 rounded-full text-xs font-medium opacity-85 cursor-pointer" /* Añadido cursor-pointer */
                >Intermedio 1</motion.span> {/* Color y opacidad ajustados */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;
