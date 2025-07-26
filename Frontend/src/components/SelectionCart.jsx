/*
export default function SelectionCart({ assets, onRemoveAsset, onContinue }) {
  return (
    <div className="selection-cart">
      <h2>🧺 Tu Selección</h2>

      {assets.length === 0 ? (
        <p>No has seleccionado ningún activo.</p>
      ) : (
        <>
          <ul className="selected-list">
            {assets.map((item) => (
              <li key={item.id} className="selected-item">
                <span className="asset-icon">
                  {item.type === "image" ? "📷" :
                   item.type === "video" ? "📹" :
                   item.type === "audio" ? "🔉" : "❓"}
                </span>
                <span className="asset-name">{item.name}</span>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveAsset(item.id)}
                >
                  🗑️ Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="continue-btn primary"
            onClick={onContinue}
          >
            Continuar a Solicitud →
          </button>
        </>
      )}
    </div>
  );
}

*/

// Componente que muestra los archivos seleccionados antes de enviar la solicitud
export default function SelectionCart({ assets, onRemoveAsset, onContinue }) {
  return (
    <div className="selection-cart">
      <h2>🧺 Tu Selección</h2>

      {/* Si no hay archivos seleccionados */}
      {assets.length === 0 ? (
        <p>No has seleccionado ningún activo.</p>
      ) : (
        <>
          {/* Lista de archivos seleccionados */}
          <ul className="selected-list">
            {assets.map((item) => (
              <li key={item.id} className="selected-item">
                {/* Icono según tipo de archivo */}
                <span className="asset-icon">
                  {item.type === "image" ? "📷" :
                   item.type === "video" ? "📹" :
                   item.type === "audio" ? "🔉" : "❓"}
                </span>
                
                {/* Nombre del archivo */}
                <span className="asset-name">{item.name}</span>
                
                {/* Botón para eliminar archivo */}
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveAsset(item.id)}
                >
                  🗑️ Eliminar
                </button>
              </li>
            ))}
          </ul>

          {/* Botón para continuar al formulario */}
          <button 
            className="continue-btn primary"
            onClick={onContinue}
          >
            Continuar a Solicitud →
          </button>
        </>
      )}
    </div>
  );
}
