const express = require('express');
const { v4: uuidv4 } = require('uuid');
const storage = require('../storage/fileStorage');
const router = express.Router();

// POST - Crear nueva solicitud
router.post('/requests', (req, res) => {
  const { requesterName, requesterEmail, purpose, deadline, items } = req.body;
  if (!requesterName|| !requesterEmail || !purpose || !deadline || !items) {
    return res.status(400).json({ error: 'Campos requeridos faltantes' });
  }

  const newRequest = {
    id: uuidv4(),
    requesterName,
    requesterEmail,
    purpose,
    deadline,
    items,
    status: 'Pending',
    adminComments: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  storage.add(newRequest);
  return res.status(201).json(newRequest);
});

// GET - Todas las solicitudes
router.get('/requests', (req, res) => {
  return res.json(storage.getAll());
});

// PATCH - Actualizar estado o comentarios
router.patch('/requests/:id', (req, res) => {
  const actual = storage.update(req.params.id, req.body);
  if (!actual) {
    return res.status(404).json({ error: 'Solicitud no encontrada' });
  }
  return res.json(actual);
});

module.exports = router;


