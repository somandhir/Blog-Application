// routes/index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Your Blogs route
router.get('/yourBlogs', (req, res) => {
  const blogsDir = path.join(__dirname, '../blogs'); // Adjust path to your blogs directory
  fs.readdir(blogsDir, (err, files) => {
    if (err) {
      console.error('Error reading blogs directory:', err);
      return res.status(500).json({ message: 'Error loading blogs' });
    }

    const blogs = []; // Initialize an empty array to hold blog data

    // Read each file in the blogs directory
    const readFilesPromises = files.map(file => {
      const filePath = path.join(blogsDir, file);
      return fs.promises.readFile(filePath, 'utf8')
        .then(data => {
          blogs.push(JSON.parse(data)); // Parse and push the blog data
        });
    });

    // Wait for all files to be read
    Promise.all(readFilesPromises)
      .then(() => {
        res.render('yourBlogs', { title: 'Your Blogs', blogs }); // Pass the blogs data to your template
      })
      .catch(err => {
        console.error('Error reading blog files:', err);
        res.status(500).json({ message: 'Error loading blogs' });
      });
  });
});

module.exports = router;
