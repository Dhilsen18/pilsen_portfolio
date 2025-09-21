import React from 'react';
import { motion } from 'framer-motion'; // Importar motion para las animaciones
import { FaUniversity, FaGraduationCap } from 'react-icons/fa'; // Importar los iconos

// Definición de props para el componente Educacion
interface EducacionProps {
  className?: string; // Propiedad className opcional para TailwindCSS u otros estilos
  currentTheme: string;
}

interface EducationEntry {
  id: number;
  institution: string | string[];
  period: string;
  degree: string;
  skills: string[];
  icon: React.ReactElement;
}

const Educacion: React.FC<EducacionProps> = ({ className, currentTheme }) => {
  const educationEntries: EducationEntry[] = [
    {
      id: 1,
      institution: ['UPC - Universidad Peruana', 'de Ciencias Aplicadas'],
      period: 'Marzo 2023 – En curso (6to Ciclo)',
      degree: 'Ingeniería en Software',
      skills: ['Desarrollo de Software', 'Gestión de Proyectos'],
      icon: <FaUniversity size={28} />,
    },
    {
      id: 2,
      institution: 'ICPNA',
      period: 'Agosto 2024 – Julio 2025',
      degree: 'Inglés',
      skills: ['Intermedio 1'],
      icon: <FaGraduationCap size={28} />,
    },
  ];

  // Determinar el color del texto basado en el tema
  const textColor = currentTheme === 'light' ? 'black' : 'white';

  return (
    <section id="educacion" className={`py-8 bg-transparent scroll-mt-16 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: textColor }}>Educación</h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {educationEntries.map((entry) => (
            <motion.div
              key={entry.id}
              className="relative flex items-center justify-center"
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <motion.div
              initial={{}} 
              animate={{}} 
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }} 
                className="relative z-10 p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-between bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg"
              style={{ transform: 'none' }} 
            >
              <div className="relative"> 
                  <div className="absolute top-0 right-0 p-2" style={{ color: textColor }}>
                    {entry.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: textColor }}>
                    {Array.isArray(entry.institution) ? (
                      entry.institution.map((part: string, index: number) => (
                        <span key={index} className={index > 0 ? 'block' : ''}> {/* 'block' para forzar salto de línea */} 
                          {part}
                        </span>
                      ))
                    ) : (
                      <span>{entry.institution}</span>
                    )}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: textColor }}>{entry.period}</p>
                  <p className="mb-6" style={{ color: textColor }}>{entry.degree}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700"> 
                  {entry.skills.map((skill, skillIndex) => (
                <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }}
                      transition={{ duration: 0.2 }}
                      className="bg-indigo-600/20 dark:bg-indigo-800/20 backdrop-filter backdrop-blur-lg text-emerald-200 dark:text-emerald-500 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacion;
