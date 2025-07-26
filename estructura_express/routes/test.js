// routes/requests.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// DB temporal para solicitudes y catálogo de activos
let requests = []; /// en vez de lista objetos archivo json 

// Activos digitales predefinidos
const digitalAssets = [
  { id: 'asset1', type: 'image', name: 'IMG', url: '/assets/image1.png' },
  { id: 'asset2', type: 'video', name: 'Video', url: '/assets/video1.mp4' },
  { id: 'asset3', type: 'audio', name: 'Audio', url: '/assets/audio1.mp3' }
];

// GET - Obtener todas las solicitudes
router.get('/requests', (req, res) => {
  res.json(requests);
});

// POST - Crear una nueva solicitud
router.post('/requests', (req, res) => {
  const { requesterName, requesterEmail, purpose, deadline, items } = req.body;

  if (!requesterName || !requesterEmail || !purpose || !deadline || !items) {
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };


  requests.push(newRequest);
  res.status(201).json(newRequest);
});

// PATCH - Actualizar el estado de una solicitud
router.patch('/requests/:id', (req, res) => {
  const { id } = req.params;
  const request = requests.find(r => r.id === id);
  
  if (!request) return res.status(404).json({ error: "Solicitud no encontrada" });

  request.status = req.body.status;
  request.adminComments = req.body.adminComments;
  request.updatedAt = new Date().toISOString();

  res.json(request);
});

// GET - Obtener activos digitales
router.get('/assets', (req, res) => {
  res.json(digitalAssets);
});

module.exports = router;
