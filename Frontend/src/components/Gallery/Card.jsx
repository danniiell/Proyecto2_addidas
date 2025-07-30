import { motion } from "framer-motion";
import { useState } from "react";

export default function Card({ asset }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ borderRadius: 12 }}
      animate={{ borderRadius: isHovered ? 16 : 12 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="relative w-full bg-white shadow-md overflow-hidden cursor-pointer rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Marca de agua PNG repetida como fondo general */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'url("/watermark.png")',
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Imagen principal */}
      <motion.div layout className="relative z-10 w-full aspect-square">
        <img
          src={asset.thumbnailUrl}
          alt={asset.name}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-300"
        />

        {/* Overlay opcional al hacer hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all z-20"
          >
            <img
              src="/HoverCard.png"
              alt="Vista previa"
              className="w-12 h-12 object-contain"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Información expandible */}
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          height: isHovered ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-4 py-3 space-y-2 overflow-hidden"
        style={{
          backgroundImage: isHovered ? 'url("/HoverCard.png")' : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(2px)", // Si quieres un efecto sutil de desenfoque
        }}
      >
        <div className="bg-white bg-opacity-80 rounded-xl p-2">
          <h3 className="text-base font-bold text-gray-800">{asset.name}</h3>
          <p className="text-sm text-gray-600">{asset.description}</p>
          <button className="w-full py-1 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition">
            Vista Previa
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
