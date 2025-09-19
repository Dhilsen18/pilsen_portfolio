import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isOpen, onClose, initialImageIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  if (!isOpen) {
    return null;
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={onClose} // Cierra la galería al hacer clic fuera del contenido
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-white/90 backdrop-filter backdrop-blur-md rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[95vh] overflow-hidden flex flex-col p-4" /* Fondo blanco semi-transparente, redondeado, ancho ajustado */
            onClick={(e) => e.stopPropagation()} // Previene que el clic en el contenido cierre la galería
          >
            {/* Botón de cerrar */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors duration-200 flex items-center justify-center z-20" /* Estilo de botón de cierre */
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={28} />
            </motion.button>

            {/* Eliminado: Encabezado con Logo y Título */}
            {/* <div className="flex flex-col items-center mb-6">
              <img src="/public/vite.svg" alt="Logo" className="h-12 mb-2" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Sistema de Inventario</h3>
            </div> */}

            {/* Imagen actual */}
            <div className="flex-grow flex items-center justify-center relative mb-4 mt-8"> {/* Añadido mt-8 para compensar la eliminación del encabezado */}
              <img
                src={currentImage}
                alt={`Project Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg" /* Añadido rounded-lg para la imagen */
              />
            </div>

            {/* Navegación - Flecha Izquierda */}
            {images.length > 1 && (
              <motion.button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors duration-200 flex items-center justify-center z-10" /* Estilo de flecha de navegación */
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft size={36} />
              </motion.button>
            )}

            {/* Navegación - Flecha Derecha */}
            {images.length > 1 && (
              <motion.button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors duration-200 flex items-center justify-center z-10" /* Estilo de flecha de navegación */
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight size={36} />
              </motion.button>
            )}
            
            {/* Indicadores de página (puntos) */}
            {images.length > 1 && (
              <div className="flex justify-center mt-auto space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
                  ></div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageGallery;





