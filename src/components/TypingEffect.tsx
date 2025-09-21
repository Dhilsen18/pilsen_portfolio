import React, { useState, useEffect } from 'react'; // Reintroducir useState y useEffect
import { motion } from 'framer-motion';

interface TypingEffectProps {
  textLine1: string;
  textLine2: string;
  typingSpeed?: number;
  deletingSpeed?: number; // Added deleting speed
  delayAfterType?: number; // Added delay after full text is typed
  delayBeforeRewrite?: number; // Added delay before rewriting
  currentTheme: string; // Añadido currentTheme
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  textLine1,
  textLine2,
  typingSpeed = 125, // Speed for typing each char
  deletingSpeed = 40, // Speed for deleting each char
  delayAfterType = 1500, // Delay after full text is typed
  delayBeforeRewrite = 750, // Delay before rewriting
  currentTheme, // Recibido currentTheme
}) => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false); // New state for deleting
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Determinar el color del texto basado en el tema
  const textColor = currentTheme === 'light' ? '#0B3D2E' : '#A8E6CF'; // Verde oscuro para claro, verde claro para oscuro

  useEffect(() => {
    let typeTimer: NodeJS.Timeout;
    let deleteTimer: NodeJS.Timeout;
    let loopTimer: NodeJS.Timeout; // For delays
    let cursorInterval: NodeJS.Timeout;

    const startCursorBlink = () => {
      clearInterval(cursorInterval);
      cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);
    };

    const stopCursorBlink = () => {
      clearInterval(cursorInterval);
      setCursorVisible(true); // Keep cursor visible at the end of typing
    };

    if (isDeleting) {
      if (charIndex > 0) {
        deleteTimer = setTimeout(() => {
          if (!isTypingLine1) { // Deleting line 2 first
            setDisplayedText2(textLine2.substring(0, charIndex - 1));
          } else { // Then deleting line 1
            setDisplayedText1(textLine1.substring(0, charIndex - 1));
          }
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        if (!isTypingLine1) { // Finished deleting line 2, now delete line 1
          setIsTypingLine1(true);
          setCharIndex(textLine1.length); // Start deleting line 1 from its end
        } else { // Finished deleting line 1
          loopTimer = setTimeout(() => {
            setIsDeleting(false);
            setIsTypingLine1(true);
            setCharIndex(0);
            setDisplayedText1('');
            setDisplayedText2('');
            startCursorBlink();
          }, delayBeforeRewrite);
        }
      }
    } else { // Typing phase
      if (isTypingLine1) {
        if (charIndex < textLine1.length) {
          typeTimer = setTimeout(() => {
            setDisplayedText1(textLine1.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, typingSpeed);
        } else {
          stopCursorBlink();
          loopTimer = setTimeout(() => {
            setIsTypingLine1(false);
            setCharIndex(0); // Reset for line 2
            setCursorVisible(true);
            startCursorBlink();
          }, 0); // No delay, immediately start typing line 2
        }
      } else { // Typing line 2
        if (charIndex < textLine2.length) {
          typeTimer = setTimeout(() => {
            setDisplayedText2(textLine2.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, typingSpeed);
        } else {
          stopCursorBlink();
          loopTimer = setTimeout(() => {
            setIsDeleting(true); // Start deleting after both lines are typed
            setIsTypingLine1(false); // Start deleting line 2 first
            setCharIndex(textLine2.length); // Start deleting from end of line 2
          }, delayAfterType);
        }
      }
    }

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(deleteTimer);
      clearTimeout(loopTimer);
      clearInterval(cursorInterval);
    };
  }, [charIndex, isTypingLine1, isDeleting, textLine1, textLine2, typingSpeed, deletingSpeed, delayAfterType, delayBeforeRewrite]);

  return (
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6 text-center md:whitespace-nowrap overflow-hidden min-h-[120px]"
      style={{ letterSpacing: '-0.05em', wordSpacing: '-0.05em', color: textColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>
        {displayedText1.split('').map((char, charIndex) => (
          <motion.span key={charIndex}>{char}</motion.span>
        ))}
        {isTypingLine1 && cursorVisible && !isDeleting && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            className={`inline-block w-1 h-[1em] border-r-4 border-current align-middle ml-1`}
          ></motion.span>
        )}
        {!isTypingLine1 && isDeleting && charIndex > 0 && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            className={`inline-block w-1 h-[1em] border-r-4 border-current align-middle ml-1`}
          ></motion.span>
        )}
      </span>
      {/* Conditional spacing and line break: `block` on mobile, hidden on web */} 
      <div className="block md:hidden h-4" /> {/* This will be a block element for line break and space on mobile, hidden on web */} 
      {/* Removed the space for web as requested */}

      {!isTypingLine1 && (
        <span>
          {displayedText2.split('').map((char, index) => (
            <motion.span key={index}>{char}</motion.span>
          ))}
          {!isTypingLine1 && cursorVisible && !isDeleting && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
              className={`inline-block w-1 h-[1em] border-r-4 border-current align-middle ml-1`}
            ></motion.span>
          )}
          {!isTypingLine1 && isDeleting && charIndex > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
              className={`inline-block w-1 h-[1em] border-r-4 border-current align-middle ml-1`}
            ></motion.span>
          )}
        </span>
      )}
    </motion.h1>
  );
};
export default TypingEffect;
