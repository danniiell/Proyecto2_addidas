/*import React from "react";

const AdminDashboard = ({ requests, onUpdateStatus, assetsCatalog }) => {
  const getAssetsForRequest = (itemIds) => {
    if (!Array.isArray(itemIds) || !Array.isArray(assetsCatalog)) return [];
    return assetsCatalog.filter((asset) => itemIds.includes(asset.id));
  };

  return (
    <div>
      <h2>Solicitudes de Usuarios</h2>
      {requests.map((request) => (
        <div
          key={request.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem"
          }}
        >
          <p><strong>Usuario:</strong> {request.requesterName}</p>
          <p><strong>Email:</strong> {request.requesterEmail}</p>
          <p><strong>Descripción:</strong> {request.purpose}</p>
          <p><strong>Fecha límite:</strong> {request.deadline}</p>
          <p><strong>Estado:</strong> {request.status}</p>

          <div>
            <strong>Archivos asociados:</strong>
            {Array.isArray(request.items) && request.items.length > 0 ? (
              <ul>
                {getAssetsForRequest(request.items).map((asset) => (
                  <li key={asset.id}>
                    {asset.name} ({asset.type})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay archivos asociados</p>
            )}
          </div>

          <div style={{ marginTop: "0.5rem" }}>
            <button
              onClick={() => onUpdateStatus(request.id, "Approved")}
              style={{
                background: "#4caf50",
                color: "#fff",
                padding: "0.4rem 1rem",
                border: "none",
                borderRadius: "4px",
                marginRight: "0.5rem"
              }}
            >
              Aprobar
            </button>

            <button
              onClick={() => onUpdateStatus(request.id, "Rejected")}
              style={{
                background: "#f44336",
                color: "#fff",
                padding: "0.4rem 1rem",
                border: "none",
                borderRadius: "4px"
              }}
            >
              Rechazar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;*/

import React from "react";

// Componente que muestra el panel de administración de solicitudes
const AdminDashboard = ({ requests, onUpdateStatus, assetsCatalog }) => {
  // Función que obtiene los assets asociados a una solicitud
  const getAssetsForRequest = (itemIds) => {
    if (!Array.isArray(itemIds) || !Array.isArray(assetsCatalog)) return [];  // Validación
    return assetsCatalog.filter((asset) => itemIds.includes(asset.id));  // Filtra assets
  };

  return (
    <div>
      <h2>Solicitudes de Usuarios</h2>
      
      {/* Mapea cada solicitud */}
      {requests.map((request) => (
        <div
          key={request.id}
          style={{
            border: "1px solid #ccc",  // Estilo de tarjeta
            padding: "1rem",
            marginBottom: "1rem"
          }}
        >
          {/* Información básica de la solicitud */}
          <p><strong>Usuario:</strong> {request.requesterName}</p>
          <p><strong>Email:</strong> {request.requesterEmail}</p>
          <p><strong>Descripción:</strong> {request.purpose}</p>
          <p><strong>Fecha límite:</strong> {request.deadline}</p>
          <p><strong>Estado:</strong> {request.status}</p>

          {/* Lista de archivos asociados */}
          <div>
            <strong>Archivos asociados:</strong>
            {Array.isArray(request.items) && request.items.length > 0 ? (  // Si hay items
              <ul>
                {getAssetsForRequest(request.items).map((asset) => (  // Muestra cada asset
                  <li key={asset.id}>
                    {asset.name} ({asset.type})  {/* Nombre y tipo */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay archivos asociados</p>  // Mensaje si no hay
            )}
          </div>

          {/* Botones de acción */}
          <div style={{ marginTop: "0.5rem" }}>
            {/* Botón Aprobar (verde) */}
            <button
              onClick={() => onUpdateStatus(request.id, "Approved")}  // Aprobar
              style={{
                background: "#4caf50",  // Verde
                color: "#fff",
                padding: "0.4rem 1rem",
                border: "none",
                borderRadius: "4px",
                marginRight: "0.5rem"
              }}
            >
              Aprobar
            </button>

            {/* Botón Rechazar (rojo) */}
            <button
              onClick={() => onUpdateStatus(request.id, "Rejected")}  // Rechazar
              style={{
                background: "#f44336",  // Rojo
                color: "#fff",
                padding: "0.4rem 1rem",
                border: "none",
                borderRadius: "4px"
              }}
            >
              Rechazar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

