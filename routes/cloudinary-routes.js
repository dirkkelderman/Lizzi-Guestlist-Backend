const express = require('express');
const router  = express.Router();

const uploader = require('../configs/cloudinary-setup.config');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }

    // IMPORTANT: variable 'image_url' can be any name, just make sure you remember to use the same in frontend
    res.json({ image_url: req.file.path });
})

module.exports = router;
