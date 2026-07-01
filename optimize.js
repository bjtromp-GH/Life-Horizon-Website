const sharp = require('sharp');
sharp('./IMG/horizon-bg-large.png')
  .resize(1200)
  .webp({ quality: 75 })
  .toFile('./IMG/horizon-bg.webp')
  .then(info => console.log('Optimized:', info))
  .catch(err => console.error(err));
