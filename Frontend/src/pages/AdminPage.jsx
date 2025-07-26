import AdminDashboard from "../components/AdminDashboard";
import AssetsPanel from "../components/AssetsPanel";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  // Estados para guardar datos
  const [requests, setRequests] = useState([]); // Guarda las solicitudes
  const [assetsCatalog, setAssetsCatalog] = useState([]); // Guarda los medios disponibles

  // Carga datos al iniciar
  useEffect(() => {
    // Obtiene las solicitudes del servidor
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/requests");
        setRequests(res.data);
      } catch (error) {
        console.error("Error al cargar solicitudes:", error);
      }
    };

    // Obtiene los medios del servidor
    const fetchAssets = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/requests/assets");
        setAssetsCatalog(res.data);
      } catch (error) {
        console.error("Error al cargar medios:", error);
      }
    };

    fetchRequests();
    fetchAssets();
  }, []);

  // Actualiza el estado de una solicitud (Aprobar/Rechazar)
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch(`http://localhost:3001/api/requests/${id}/status`, {
        status: newStatus,
        adminComments: newStatus === "Approved" 
          ? "Aprobado" 
          : "Rechazado",
      });

      // Actualiza la lista de solicitudes
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? res.data : req))
      );
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Panel del Administrador</h1>

      {/* Muestra el dashboard con solicitudes */}
      <AdminDashboard
        requests={requests}
        onUpdateStatus={updateStatus}
        assetsCatalog={assetsCatalog}
      />

      <hr style={{ margin: "2rem 0" }} />

      {/* Muestra todos los medios disponibles */}
      <AssetsPanel assets={assetsCatalog} />
    </div>
  );
};

export default AdminPage;
