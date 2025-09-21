import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';

interface ExperienciaProps {
  currentTheme: string;
}

const Experiencia: React.FC<ExperienciaProps> = ({ currentTheme }) => {
  const experiences = [
    {
      id: 1,
      title: 'Proyectos de I+D',
      company: 'Proyectos de I+D',
      period: '2023 - Presente',
      description: 'Participación en proyectos de investigación y desarrollo en C++.',
      skills: ['C++', 'Investigación', 'Desarrollo'],
      icon: <FaLightbulb size={32} />,
    },
    {
      id: 2,
      title: 'Comunidad IEEE – UPC',
      company: 'Comunidad IEEE – UPC',
      period: 'Miembro Activo',
      description: 'Miembro activo de la comunidad internacional IEEE – UPC.',
      skills: ['IEEE', 'Comunidad', 'Networking'],
      icon: <FaUsers size={32} />,
    },
    {
      id: 3,
      title: 'Concursos de Programación',
      company: 'Concursos de Programación',
      period: 'Agosto 2023',
      description: 'Participante en concursos de programación competitiva en agosto 2023.',
      skills: ['Programación Competitiva', 'Algoritmos', 'C++'],
      icon: <FaCode size={32} />,
    },
  ];

  const textColor = currentTheme === 'light' ? 'black' : 'white';

  return (
    <section id="experiencia" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: textColor }}>Experiencia</h2>

        {/* Contenedor principal transparente para las tarjetas */}
        <motion.div
          className="bg-white/30 dark:bg-gray-800/30 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-8"
          initial={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex flex-col p-6 rounded-xl shadow-neumorphic-light dark:shadow-neumorphic-dark
                           bg-white/40 dark:bg-gray-800/40"
                initial={{ opacity: 1 }} // Aparecer visible de inmediato
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)", transition: { duration: 0.2 } }} /* Animación de resaltado */
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: index * 0.1 }}
              >
                <div className="relative mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: textColor }}>{exp.title}</h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }} /* Animación de escala y rotación */
                    animate={{ y: [0, -5, 0] }} /* Animación de flotación sutil */
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} /* Transición suave y continua */
                    className="w-fit" /* Centrado horizontal, margen inferior */
                    style={{ color: textColor }} // Aplicar el color del texto al icono
                  >
                    {exp.icon}
                  </motion.div>
                </div>
                <p className="text-sm mb-1" style={{ color: textColor }}>{exp.company}</p>
                <p className="text-xs mb-4" style={{ color: textColor }}>{exp.period}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: textColor }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-start">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} /* Sin resaltado de sombra */
                      transition={{ duration: 0.2 }}
                      className="bg-indigo-600/20 dark:bg-indigo-800/20 backdrop-filter backdrop-blur-lg text-emerald-200 dark:text-emerald-500 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencia;
