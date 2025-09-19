import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ImageGallery from './ImageGallery'; // Importar el nuevo componente
import { motion } from 'framer-motion'; // Importar motion

const Proyectos: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState(0);

  const openGallery = (images: string[], initialIndex: number = 0) => {
    setCurrentProjectImages(images);
    setInitialGalleryIndex(initialIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentProjectImages([]);
    setInitialGalleryIndex(0);
  };

  const projects = [
    {
      id: 1,
      // La primera imagen se usará como la vista previa en la tarjeta
      previewImage: import.meta.env.BASE_URL + 'images/proyectos/project2-image1.jpg',
      title: 'La Avenida - Cafetería en Huarmey',
      description: 'Desarrollo de una plataforma web para la cafetería La Avenida en Huarmey, permitiendo la visualización de la carta y gestión de reservas. Implementado con HTML, CSS y JavaScript para una experiencia de usuario interactiva y fluida.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/Dhilsen18/ProyectoPersonal_LaAvenida',
      demoLink: '#',
      images: [
        import.meta.env.BASE_URL + 'images/proyectos/project2-image1.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project2-image2.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project2-image3.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project2-image4.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project2-image5.jpg',
      ],
    },
    {
      id: 2,
      // La primera imagen se usará como la vista previa en la tarjeta
      previewImage: import.meta.env.BASE_URL + 'images/proyectos/project3-image1.jpg',
      title: 'PsyCare - Detección de Trastornos Psicológicos',
      description: 'Aplicación web diseñada para la detección temprana de trastornos psicológicos en estudiantes universitarios. Utiliza HTML, CSS, JavaScript y Node.js para un sistema robusto y fácil de usar que apoya la salud mental estudiantil.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      codeLink: 'https://github.com/Dhilsen18',
      demoLink: 'https://github.com/Dhilsen18',
      images: [
        import.meta.env.BASE_URL + 'images/proyectos/project3-image1.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project3-image2.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project3-image3.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project3-image4.jpg',
        import.meta.env.BASE_URL + 'images/proyectos/project3-image5.jpg',
      ],
    },
  ];

  return (
    <section id="proyectos" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Proyectos</h2> {/* Título cambiado y centrado */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rotating-border-light flex items-center justify-center"
              initial={{ opacity: 1 }} // Aparecer visible de inmediato
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(125,211,252,0.4)" }} /* Sutil resaltado para toda la tarjeta al pasar el cursor */
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                initial={{}} /* Asegura que no rote al inicio */
                animate={{ y: [0, -5, 0] }} /* Animación de "flotación" sutil */
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }} /* Transición suave y continua */
                className="relative z-10 p-8 rounded-lg shadow-xl w-full h-full flex flex-col items-center justify-center text-white bg-[rgba(20,20,70,0.8)]" /* Fondo azul marino más oscuro y transparente */
                style={{ transform: 'none' }} /* Asegura que el contenido interno no rote */
              >
                <motion.div /* Contenedor para la imagen con animación de hover */
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }} /* Escala y sombra al pasar el cursor */
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-64 overflow-hidden rounded-lg mb-6"
                >
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openGallery(project.images)}
                  />
                </motion.div>
                <div className="flex flex-col items-center text-center"> {/* Contenedor para título, descripción y botones */}
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }} /* Resaltado al pasar el cursor */
                        transition={{ duration: 0.2 }}
                        className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-3 py-1 rounded-full text-sm cursor-pointer" /* Color y opacidad ajustados, añadido cursor-pointer */
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center font-semibold text-white hover:text-gray-300 text-sm"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center font-semibold group text-white hover:text-gray-300 text-sm"
                    >
                      Live Demo <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Renderiza la galería de imágenes si está abierta */}
        <ImageGallery
          images={currentProjectImages}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          initialImageIndex={initialGalleryIndex}
        />
      </div>
    </section>
  );
};

export default Proyectos;
