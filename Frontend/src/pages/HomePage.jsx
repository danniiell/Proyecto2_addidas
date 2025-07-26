import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import AssetsPanel from "../components/AssetsPanel";
import RequestPopup from "../components/RequestPopup";

const HomePage = () => {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [mediaAssets, setMediaAssets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/test/requests/assets")
      .then((res) => res.json())
      .then((data) => setMediaAssets(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSelect = (item) => {
    setSelectedAssets((prev) => {
      const exists = prev.some((a) => a.id === item.id);
      return exists ? prev.filter((a) => a.id !== item.id) : [...prev, item];
    });
  };

  const handleRemoveAsset = (id) => {
    setSelectedAssets((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSubmitRequest = async (formData) => {
    const payload = {
      requesterName: formData.name,
      requesterEmail: formData.email,
      assetType: formData.assetType,
      purpose: formData.purpose,
      deadline: formData.deadline,
      items: selectedAssets.map((a) => a.id),
    };

    try {
      const response = await fetch("http://localhost:3000/test/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("✅ Solicitud enviada");
        setSelectedAssets([]);
        setShowPopup(false);
      } else {
        alert("❌ Error al enviar");
      }
    } catch (error) {
      alert("❌ Error de conexión");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.jpg" alt="Logo" className={styles.logo} />
        <button className={styles.loginButton}>Login Admin</button>
      </header>

      <div className={styles.banner}></div>

      <div className={styles.pageContent}>
        <h1 className={styles.title}>Galería de medios</h1>

        <AssetsPanel
          assets={mediaAssets}
          selectedIds={selectedAssets.map((a) => a.id)}
          onSelect={handleSelect}
        />

        {selectedAssets.length > 0 && (
          <button className={styles.cartButton} onClick={() => setShowPopup(true)}>
            🛒 ({selectedAssets.length})
          </button>
        )}

        {showPopup && (
          <RequestPopup
            selectedAssets={selectedAssets}
            onClose={() => setShowPopup(false)}
            onRemoveAsset={handleRemoveAsset}
            onSubmit={handleSubmitRequest}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;

