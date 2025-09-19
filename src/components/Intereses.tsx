import React, { useRef } from 'react'; // Eliminar useState, mantener useRef por si acaso aunque ya no sea para dragConstraints
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Importar componentes de React-Leaflet
import 'leaflet/dist/leaflet.css'; // Importar los estilos CSS de Leaflet
import L from 'leaflet'; // Importar la librería Leaflet para iconos personalizados
import { GiSparkles } from 'react-icons/gi'; // Icono llamativo para el título
import { FaTheaterMasks, FaPlaneDeparture, FaHandsHelping, FaTiktok } from 'react-icons/fa'; // Iconos profesionales para Danza, Viajar, Voluntariado y TikTok

const Intereses: React.FC = () => {
  const dragContainerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor de arrastre (se mantiene por si acaso, aunque ya no sea para dragConstraints directamente)

  // Convertir intereses a un array constante, eliminando useState y las propiedades initialX/Y
  const intereses = [
    { name: 'Juegos', emoji: '🎮' },
    { name: 'Voluntariado', emoji: <FaHandsHelping className="text-green-400" /> },
    { name: 'Fotografía', emoji: '📸' },
    { name: 'Viajar', emoji: <FaPlaneDeparture className="text-blue-400" /> },
    { name: 'Música', emoji: '🎵' },
    { name: 'TikTok', emoji: <FaTiktok className="text-purple-400" /> },
    { name: 'Danza', emoji: <FaTheaterMasks className="text-pink-400" /> },
    { name: 'Fitness', emoji: '🏋️' },
  ];

  // Crear un ícono Leaflet personalizado para tu emoji avatar
  const customIcon = L.divIcon({
    html: '<div class="relative w-24 h-24 rounded-full flex items-center justify-center bg-white opacity-90 shadow-lg glow-effect"><img src="/images/emoji_avatar2.png" class="w-22 h-22 object-contain rounded-full" alt="Avatar"/></div>', // Aumentado el tamaño del div a w-24 h-24 y la imagen a w-22 h-22
    className: 'custom-leaflet-icon',
    iconSize: [96, 96], // Ajustado el tamaño del icono para que coincida con el div
    iconAnchor: [48, 96], // Ajustado el ancla
    popupAnchor: [0, -96] // Ajustado el ancla del popup
  });

  // Coordenadas para la ubicación del mapa (ejemplo: Lima, Perú)
  const mapCenter: [number, number] = [-12.0710, -77.0490]; // Coordenadas para Cercado de Lima, cerca de Av. Brasil

  return (
    <section id="intereses" className="py-8 bg-transparent text-white">
      <div className="container mx-auto px-4">
        {/* Removed the h2 title "Intereses y Hobbies" to match the image layout */}
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Changed to grid-cols-3 */}
          {/* Intereses Section */}
          <motion.div
            className="relative rotating-border-light flex flex-col p-8 rounded-lg shadow-md bg-[rgba(20,20,70,0.8)] md:col-span-2" /* Fondo azul marino más oscuro y transparente */
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2"> {/* Añadido flex items-center gap-2 */}
              <GiSparkles className="text-yellow-300" /> Más Allá del Código
            </h3>
            <p className="text-gray-300 mb-6">Explora mis intereses y pasatiempos más allá del ámbito digital.</p>
            <div className="flex flex-wrap gap-3 relative" ref={dragContainerRef}> {/* Volver a flexbox, quitar altura fija */}
              {intereses.map((interes, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-cyan-400/70 to-blue-500/70 text-white px-4 py-2 rounded-full text-md flex items-center gap-2 cursor-grab shadow-lg whitespace-nowrap" /* Ajustada la opacidad y colores a celeste */
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(125,211,252,0.5)" }}
                  whileTap={{ scale: 0.95, cursor: "grabbing" }}
                  animate={{ y: [0, -5, 0] }} // Animación de arriba a abajo
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }} // Transición suave con delay para escalonamiento
                  // Eliminadas propiedades de arrastre
                >
                  {interes.name} {interes.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="relative rotating-border-light flex items-center justify-center rounded-lg shadow-md bg-[rgba(20,20,70,0.8)] h-96 md:col-span-1 md:h-full" /* Fondo azul marino más oscuro y transparente */
            initial={{ opacity: 1 }} // Aparecer visible de inmediato
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-lg z-0 no-attribution"> {/* Añadido rounded-lg de nuevo aquí */}
              <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" // Usando el estilo outdoors de Stadia Maps para más color
              />
              <Marker position={mapCenter} icon={customIcon}> {/* Usar el icono personalizado */}
                <Popup>
                  ¡Aquí estoy!
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intereses;
