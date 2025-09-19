import React, { useState, useEffect } from 'react'; // Reintroducir useState y useEffect
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  nameColor: string;
  typingSpeed?: number; // Velocidad de escritura (ms por carácter)
  deletingSpeed?: number; // Velocidad de borrado (ms por carácter)
  delayAfterType?: number; // Retraso después de escribir antes de que el borrado comience
  delayBeforeRewrite?: number; // Retraso después de borrar antes de reescribir
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  nameColor,
  typingSpeed = 125, // Velocidad de escritura ajustada para ser un poco más rápida
  deletingSpeed = 40, // Velocidad de borrado ajustada para ser un poco más rápida
  delayAfterType = 2000, // Retraso después de escribir antes de borrar
  delayBeforeRewrite = 1000, // Retraso antes de reescribir
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true); // Controla la visibilidad del cursor

  // Separar el saludo del nombre
  const greeting = "Hi, I'm  "; // Saludo actualizado con dos espacios
  const name = "Dhilsen Mallqui";
  const fullText = greeting + name; // Texto completo para el efecto

  useEffect(() => {
    let typeTimer: NodeJS.Timeout;
    let deleteTimer: NodeJS.Timeout;
    let restartTimer: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    // Función para alternar la visibilidad del cursor
    const startCursorBlink = () => {
      clearInterval(cursorInterval);
      cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500); // Frecuencia de parpadeo
    };

    // Si estamos escribiendo
    if (!isDeleting) {
      if (charIndex < fullText.length) {
        typeTimer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Terminado de escribir, esperar y empezar a borrar
        startCursorBlink(); // Empezar a parpadear el cursor
        restartTimer = setTimeout(() => {
          setIsDeleting(true);
          setCursorVisible(true); // Asegurar que el cursor es visible al iniciar borrado
        }, delayAfterType);
      }
    } else { // Si estamos borrando
      if (charIndex > 0) {
        deleteTimer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Terminado de borrar, esperar y empezar a escribir de nuevo
        restartTimer = setTimeout(() => {
          setIsDeleting(false);
          setCursorVisible(true); // Asegurar que el cursor es visible al iniciar escritura
          setDisplayedText(''); // Limpiar para reescritura
        }, delayBeforeRewrite);
      }
    }

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(deleteTimer);
      clearTimeout(restartTimer);
      clearInterval(cursorInterval);
    };
  }, [charIndex, isDeleting, fullText, typingSpeed, deletingSpeed, delayAfterType, delayBeforeRewrite]); // Dependencias para el useEffect

  return (
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 text-center md:whitespace-nowrap overflow-hidden min-h-[120px]"
      style={{ letterSpacing: '-0.05em', wordSpacing: '-0.05em' }} // Aplicar letter-spacing y word-spacing negativo
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText.split('').map((char, index) => {
        const isNameChar = index >= greeting.length; // Determina si el carácter es parte del nombre
        const isMallquiStart = index === (greeting.length + name.indexOf('Mallqui')); // Detectar el inicio de "Mallqui"

        return (
          <React.Fragment key={index}> {/* Usar Fragment para renderizar múltiples elementos */}
            {/* isMallquiStart && <br className="md:hidden" /> */} {/* Salto de línea solo en móvil antes de "Mallqui" (removido para probar espaciado) */}
            <motion.span
              className={`${isNameChar ? nameColor : 'text-gray-900 dark:text-white'}`}
            >
              {char}
            </motion.span>
          </React.Fragment>
        );
      })}
      {cursorVisible && <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
        className={`inline-block w-1 h-[1em] border-r-4 ${isDeleting ? 'border-transparent' : 'border-gray-900 dark:border-white'} align-middle ml-1`}
      ></motion.span>} {/* Cursor parpadeante */}
    </motion.h1>
  );
};

export default TypingEffect;
