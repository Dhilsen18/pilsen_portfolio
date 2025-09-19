import React, { useState } from 'react'; // Importar useState
import { DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiReact, DiAngularSimple, DiPython, DiMysql, DiDatabase } from 'react-icons/di';
import { SiTailwindcss, SiCplusplus, SiNestjs, SiSpringboot } from 'react-icons/si';
import { FaJava, FaCogs, FaServer, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Competencia: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null); // Estado para la tecnología seleccionada

  const handleTechClick = (techName: string) => {
    setSelectedTech(techName === selectedTech ? null : techName); // Alternar selección
  };

  return (
    <section id="competencia" className="py-10 lg:py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Competencias</h2> {/* Título cambiado a "Competencias" */}
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Tarjeta Frontend */}
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
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center"> {/* Centrado */}
                <FaLaptopCode size={24} className="mr-3 text-white" /> Frontend
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('HTML')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'HTML' ? 'bg-blue-200' : ''}`}
                >
                  <DiHtml5 size={24} className="mb-1 text-orange-400" /> HTML
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('CSS')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'CSS' ? 'bg-blue-200' : ''}`}
                >
                  <DiCss3 size={24} className="mb-1 text-blue-400" /> CSS
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('JavaScript')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'JavaScript' ? 'bg-blue-200' : ''}`}
                >
                  <DiJavascript1 size={24} className="mb-1 text-yellow-500" /> JavaScript
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Tailwind')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Tailwind' ? 'bg-blue-200' : ''}`}
                >
                  <SiTailwindcss size={24} className="mb-1 text-cyan-400" /> Tailwind
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Bootstrap')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Bootstrap' ? 'bg-blue-200' : ''}`}
                >
                  <DiBootstrap size={24} className="mb-1 text-purple-400" /> Bootstrap
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Frameworks */}
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
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center"> {/* Centrado */}
                <FaCogs size={24} className="mr-3 text-white" /> Frameworks
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('React')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'React' ? 'bg-blue-200' : ''}`}
                >
                  <DiReact size={24} className="mb-1 text-cyan-400" /> React
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Angular')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Angular' ? 'bg-blue-200' : ''}`}
                >
                  <DiAngularSimple size={24} className="mb-1 text-red-600" /> Angular
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Nest.js')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Nest.js' ? 'bg-blue-200' : ''}`}
                >
                  <SiNestjs size={24} className="mb-1 text-red-500" /> Nest.js
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('SpringBoot')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'SpringBoot' ? 'bg-blue-200' : ''}`}
                >
                  <SiSpringboot size={24} className="mb-1 text-green-500" /> SpringBoot
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Backend */}
          <motion.div
            className="relative rotating-border-light flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between text-white bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6 flex items-center justify-center"> {/* Centrado */}
                <FaServer size={24} className="mr-3 text-white" /> Backend
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-6 text-base text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Java')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Java' ? 'bg-blue-200' : ''}`}
                >
                  <FaJava size={24} className="mb-1 text-red-500" /> Java
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('Python')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'Python' ? 'bg-blue-200' : ''}`}
                >
                  <DiPython size={24} className="mb-1 text-blue-500" /> Python
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('C++')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'C++' ? 'bg-blue-200' : ''}`}
                >
                  <SiCplusplus size={24} className="mb-1 text-blue-600" /> C++
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tarjeta Bases de Datos */}
          <motion.div
            className="relative rotating-border-light flex items-center justify-center"
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <motion.div
              initial={{}} /* Asegura que no rote al inicio */
              animate={{}} /* Asegura que no rote */
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} /* Transición suave */
              className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between text-white bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
              style={{ transform: 'none' }}
            >
              <h3 className="text-3xl font-semibold text-white mb-3 flex items-center justify-center"> {/* Centrado */}
                <DiDatabase size={24} className="mr-3 text-white" /> Bases de Datos
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 text-base text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('SQL Server')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'SQL Server' ? 'bg-blue-200' : ''}`}
                >
                  <DiDatabase size={24} className="mb-1 text-gray-400" /> SQL Server
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                  transition={{ duration: 0.2 }}
                  onClick={() => handleTechClick('MySQL')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedTech === 'MySQL' ? 'bg-blue-200' : ''}`}
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
