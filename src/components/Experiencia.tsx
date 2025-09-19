import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaCode } from 'react-icons/fa'; // Importar nuevos iconos

const Experiencia: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Logros y Participaciones',
      company: 'Proyectos de I+D',
      period: '2023 - Presente',
      description: 'Participación en proyectos de investigación y desarrollo en C++.',
      skills: ['C++', 'Investigación', 'Desarrollo'],
      icon: <FaLightbulb size={32} className="text-white" />,
    },
    {
      id: 2,
      title: 'Logros y Participaciones',
      company: 'Comunidad IEEE – UPC',
      period: 'Miembro Activo',
      description: 'Miembro activo de la comunidad internacional IEEE – UPC.',
      skills: ['IEEE', 'Comunidad', 'Networking'],
      icon: <FaUsers size={32} className="text-white" />,
    },
    {
      id: 3,
      title: 'Logros y Participaciones',
      company: 'Concursos de Programación',
      period: 'Agosto 2023',
      description: 'Participante en concursos de programación competitiva en agosto 2023.',
      skills: ['Programación Competitiva', 'Algoritmos', 'C++'],
      icon: <FaCode size={32} className="text-white" />,
    },
  ];

  return (
    <section id="experiencia" className="py-20 text-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Experiencia</h2> {/* Título cambiado a español y color */}
        {/* <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">A collection of my work experience and the roles I have taken in various organizations</p> */}

        <div className="relative space-y-16 lg:space-y-24 mt-16">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full hidden lg:block"></div> {/* Color de línea de tiempo ajustado */}

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative lg:flex items-center w-full">
              {/* Contenido de la experiencia */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}> {/* Ajuste de orden para alternar */}
                <motion.div
                  className="relative rotating-border-light flex items-center justify-center"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(125,211,252,0.4)" }} /* Sutil resaltado para toda la tarjeta al pasar el cursor */
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ opacity: 1, x: 0 }} // Aparecer visible de inmediato sin movimiento lateral
                    animate={{ y: [0, -5, 0] }} /* Animación de "flotación" sutil */
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }} /* Transición suave y continua */
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-10 p-8 rounded-lg shadow-md text-white w-full h-full bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
                    style={{ transform: 'none' }} /* Asegura que el contenido interno no rote */
                  >
                    {/* Period (Fecha) en la esquina superior derecha */}
                    <p className="absolute top-4 right-4 text-gray-400 text-xs font-bold">{exp.period}</p>

                    {/* Icono centrado arriba del título */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }} /* Animación de escala y rotación */
                      animate={{ y: [0, -5, 0] }} /* Animación de flotación sutil */
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} /* Transición suave y continua */
                      className="mx-auto mb-4 w-fit" /* Centrado horizontal, margen inferior */
                    >
                      {exp.icon} {/* Usar el ícono importado */}
                    </motion.div>

                    {/* Título y Compañía centrados */}
                    <h3 className="text-xl font-semibold text-white text-center mb-1">{exp.title}</h3>
                    <p className="text-gray-300 text-sm text-center mb-6">{exp.company}</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed text-center">
                      {exp.description}
                    </p>
                    <h4 className="text-md font-semibold text-white mb-3 text-center">Skills:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                          transition={{ duration: 0.2 }}
                          className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer" /* Color y opacidad ajustados, añadido cursor-pointer */
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Círculo del timeline - Se mantiene sin cambios */}
              <motion.div
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(0, 191, 255, 0.6)" }} /* Sombra azul brillante al pasar el cursor */
                transition={{ duration: 0.3, ease: "easeOut" }} /* Transición suave */
                className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 border-4 border-gray-900 items-center justify-center transition-all duration-300 ease-in-out"
              >
                {/* Este era el img para el logo del timeline, ahora vacío o con otro ícono si se desea */}
              </motion.div>

              {/* Espaciador para el layout alterno en pantallas grandes */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
