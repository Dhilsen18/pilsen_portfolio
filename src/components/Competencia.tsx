import React from 'react'; // Eliminar useState
import { DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiReact, DiAngularSimple, DiPython, DiMysql, DiDatabase } from 'react-icons/di';
import { SiTailwindcss, SiCplusplus, SiNestjs, SiSpringboot } from 'react-icons/si';
import { FaJava, FaCogs, FaServer, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CompetenciaProps {
  currentTheme: string; // Añadir la prop currentTheme
}

const Competencia: React.FC<CompetenciaProps> = ({ currentTheme }) => {
  // const [selectedTech, setSelectedTech] = useState<string | null>(null); // Estado para la tecnología seleccionada

  // const handleTechClick = (techName: string) => {
  //   setSelectedTech(techName === selectedTech ? null : techName); // Alternar selección
  // };

  // Determinar el color del texto basado en el tema
  const textColor = currentTheme === 'light' ? 'black' : 'white';

  return (
    <section id="competencia" className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: textColor }}>Competencias</h2> {/* Título cambiado a "Competencias" */}
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Tarjeta Frontend */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg"
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold mb-6 flex items-center justify-center" style={{ color: textColor }}> {/* Centrado */}
                <FaLaptopCode size={24} className="mr-3" /> Frontend
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('HTML')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiHtml5 size={24} className="mb-1 text-orange-400" /> HTML
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('CSS')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiCss3 size={24} className="mb-1 text-blue-400" /> CSS
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('JavaScript')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiJavascript1 size={24} className="mb-1 text-yellow-500" /> JavaScript
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Tailwind')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <SiTailwindcss size={24} className="mb-1 text-cyan-400" /> Tailwind
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Bootstrap')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiBootstrap size={24} className="mb-1 text-purple-400" /> Bootstrap
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Frameworks */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg"
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold mb-6 flex items-center justify-center" style={{ color: textColor }}> {/* Centrado */}
                <FaCogs size={24} className="mr-3" /> Frameworks
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('React')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiReact size={24} className="mb-1 text-cyan-400" /> React
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Angular')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiAngularSimple size={24} className="mb-1 text-red-600" /> Angular
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Nest.js')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <SiNestjs size={24} className="mb-1 text-red-500" /> Nest.js
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('SpringBoot')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <SiSpringboot size={24} className="mb-1 text-green-500" /> SpringBoot
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Backend */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg"
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold mb-6 flex items-center justify-center" style={{ color: textColor }}> {/* Centrado */}
                <FaServer size={24} className="mr-3" /> Backend
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Java')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <FaJava size={24} className="mb-1 text-red-500" /> Java
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('Python')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiPython size={24} className="mb-1 text-blue-500" /> Python
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('C++')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <SiCplusplus size={24} className="mb-1 text-blue-600" /> C++
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Bases de Datos */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg"
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold mb-3 flex items-center justify-center" style={{ color: textColor }}> {/* Centrado */}
                <DiDatabase size={24} className="mr-3" /> Bases de Datos
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 text-base">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('SQL Server')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiDatabase size={24} className="mb-1 text-gray-400" /> SQL Server
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  // onClick={() => handleTechClick('MySQL')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-default`}
                  style={{ color: textColor }}
                >
                  <DiMysql size={24} className="mb-1 text-blue-500" /> MySQL
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Competencia;
