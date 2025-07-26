import React from "react";

const mediaHeight = "200px"; // Tamaño fijo para el medio
const mediaStyle = {
  width: "100%",
  height: mediaHeight,
  objectFit: "cover",
  borderRadius: "4px",
};

const defaultAudioImage = "/default-audio.jpg";

const AssetsPanel = ({ assets, selectedIds = [], onSelect = () => {} }) => {
  return (
    <div style={{ padding: "1rem", backgroundColor: "#121212", color: "white" }}>
      <h2 style={{ marginBottom: "1rem" }}>Archivos Multimedia</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {assets.length > 0 ? (
          assets.map((item, index) => {
            const tipo = (item.tipo || item.type)?.toLowerCase() ?? "";
            const url = item.url ?? "";
            const titulo = item.titulo || item.name || `Archivo ${index + 1}`;
            const isSelected = selectedIds.includes(item.id);

            return (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  height: mediaHeight,
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #444",
                  boxShadow: isSelected ? "0 0 0 2px #00ffcc" : "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
                onClick={() => onSelect(item)}
              >
                {/* Título fijo abajo pero sobre el medio */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#000000aa",
                    color: "#ccc",
                    padding: "0.3rem",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  {titulo}
                </div>

                {tipo.includes("image") && (
                  <img
                    src={`http://localhost:3001${url}`}
                    alt={titulo}
                    style={mediaStyle}
                  />
                )}

                {tipo.includes("video") && (
                  <video controls style={mediaStyle}>
                    <source src={`http://localhost:3001${url}`} type="video/mp4" />
                  </video>
                )}

                {tipo.includes("audio") && (
                  <div style={{ position: "relative", width: "100%", height: mediaHeight }}>
                    <img
                      src={defaultAudioImage}
                      alt="Audio Preview"
                      style={mediaStyle}
                    />
                    <audio
                      controls
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        backgroundColor: "#121212cc",
                      }}
                    >
                      <source src={`http://localhost:3001${url}`} type="audio/mp3" />
                    </audio>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No hay archivos disponibles.
          </p>
        )}
      </div>
    </div>
  );
};

export default AssetsPanel;


