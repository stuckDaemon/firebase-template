const express = require('express');
const router = express.Router();
const fooService = require('../service/foo.service');

// Routes
router.post('/create', fooService.create);
router.get('/list', fooService.list);
router.get('/get/:id', fooService.getById);
router.get('/delete/:id', fooService.deleteById);

module.exports = router;
