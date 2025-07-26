
// Función que devuelve un icono según el tipo de archivo
const getIcon = (type) => {
  return type === "image" ? "📷"  // Icono para imágenes
       : type === "video" ? "📹"  // Icono para videos
       : type === "audio" ? "🔉"  // Icono para audios
       : "❓";  // Icono por defecto
};

// Componente que muestra una galería de archivos multimedia
const MediaGallery = ({ assets, selectedIds = [], onSelect }) => {
  return (
    <div className="media-gallery">
      {/* Mapea cada archivo multimedia */}
      {assets.map((item) => (
        <div
          key={item.id}  // Clave única para cada elemento
          className={`gallery-item ${selectedIds.includes(item.id) ? 'selected' : ''}`}  // Clase 'selected' si está seleccionado
          onClick={() => onSelect(item)}  // Maneja la selección
          title={item.name}  // Tooltip con el nombre
        >
          {/* Muestra el icono correspondiente */}
          <div className="item-icon">{getIcon(item.type)}</div>
          
          {/* Muestra el nombre del archivo */}
          <span className="item-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;