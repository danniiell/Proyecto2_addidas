import { useState } from "react";
import { watermark, assets } from "../../assetsData.js";

const Card = ({ asset }) => {  // ← Quita watermark de las props
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 cursor-pointer transition-all duration-300 ease-out"
      style={{
        transform: isHovered ? 'scale(1.05) translateY(-10px)' : 'scale(1) translateY(0px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor principal de la imagen */}
      <div className="relative w-64 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
        {/* Imagen principal del producto */}
        <img 
          src={asset.image} 
          alt={asset.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        
        {/* Marca de agua automática (siempre visible) */}
        {watermark && (  // ← Verificar que watermark exista
          <img 
            src={watermark}  // ← Usa el watermark importado
            alt="Watermark"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
          />
        )}
        
        {/* Overlay oscuro que aparece en hover */}
        <div 
          className="absolute inset-0 transition-colors duration-300 z-20"
          style={{
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)',
          }}
        />
        
        {/* Indicador visual de hover */}
        <div 
          className="absolute top-2 right-2 w-3 h-3 bg-orange-500 rounded-full transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
      
      {/* Panel de información que se despliega con animación mejorada */}
      <div 
        className="absolute left-0 right-0 top-64 bg-white rounded-b-xl shadow-xl overflow-hidden transition-all duration-500 ease-out z-40"
        style={{
          maxHeight: isHovered ? '200px' : '0px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0px)' : 'translateY(-10px)',
        }}
      >
        <div className="p-4 border-t-2 border-orange-400">
          <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">
            {asset.name}
          </h3>
          <div className="text-sm text-gray-600 mb-2">
            <p><span className="font-semibold">Tipo:</span> {asset.type}</p>
            <p><span className="font-semibold">Dimensiones:</span> {asset.dimensions}</p>
          </div>
          
          {/* Botón de acción con animación suave */}
          <div className="mt-3 flex justify-center">
            <button 
              className="px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-200 transform"
              style={{
                backgroundColor: isHovered ? '#ea580c' : '#f97316',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#c2410c';
                e.target.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = isHovered ? '#ea580c' : '#f97316';
                e.target.style.transform = isHovered ? 'scale(1.05)' : 'scale(1)';
              }}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;