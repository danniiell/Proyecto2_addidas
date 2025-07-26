/*import { useState } from "react";

export default function RequestForm({ assets = [], onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.purpose || !formData.deadline) {
      alert("Por favor completa todos los campos");
      return;
    }

    onSubmit({
      ...formData,
      assetsCount: assets.length
    });
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <h2>📋 Completa tu solicitud</h2>

      <div className="form-group">
        <label>Nombre:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Propósito:</label>
        <textarea 
          name="purpose" 
          value={formData.purpose} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Fecha límite:</label>
        <input 
          type="date" 
          name="deadline" 
          value={formData.deadline} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onBack}>← Atrás</button>
        <button type="submit">Enviar Solicitud</button>
      </div>
    </form>
  );
}*/


import { useState } from "react";

// Componente para formulario de solicitud de medios
export default function RequestForm({ assets = [], onBack, onSubmit }) {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    deadline: "",
  });

  // Maneja cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de campos requeridos
    if (!formData.name || !formData.email || !formData.purpose || !formData.deadline) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Envía los datos del formulario
    onSubmit({
      ...formData,
      assetsCount: assets.length  // Incluye cantidad de archivos seleccionados
    });
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <h2>📋 Completa tu solicitud</h2>

      {/* Campo para nombre */}
      <div className="form-group">
        <label>Nombre:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>

      {/* Campo para email */}
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>

      {/* Campo para propósito */}
      <div className="form-group">
        <label>Propósito:</label>
        <textarea 
          name="purpose" 
          value={formData.purpose} 
          onChange={handleChange} 
          required 
        />
      </div>

      {/* Campo para fecha límite */}
      <div className="form-group">
        <label>Fecha límite:</label>
        <input 
          type="date" 
          name="deadline" 
          value={formData.deadline} 
          onChange={handleChange} 
          required 
        />
      </div>

      {/* Botones de acción */}
      <div className="form-actions">
        <button type="button" onClick={onBack}>← Atrás</button>
        <button type="submit">Enviar Solicitud</button>
      </div>
    </form>
  );
}