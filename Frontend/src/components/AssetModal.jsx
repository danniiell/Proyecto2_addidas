import React from "react";

const backdropStyle = {
  position: "fixed",
  top: 0, left: 0,
  width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#fff",
  borderRadius: "6px",
  padding: "1rem",
  maxWidth: "90%",
  maxHeight: "80%",
  overflowY: "auto",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  position: "relative"
};

const closeBtnStyle = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  background: "transparent",
  border: "none",
  fontSize: "1.2rem",
  cursor: "pointer"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "0.75rem",
  marginTop: "1rem"
};

export const AssetModal = ({ assets, onClose }) => {
  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>✖️</button>
        <h3>Archivos asociados ({assets.length})</h3>
        <div style={gridStyle}>
          {assets.map((a) => (
            <div key={a.id} style={{ textAlign: "center" }}>
              <img
                src={a.url}
                alt={a.name}
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
              <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
                {a.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
