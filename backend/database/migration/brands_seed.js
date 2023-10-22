const sqlite3 = require('sqlite3').verbose();

// Create or connect to the database
const db = new sqlite3.Database('brands.db');

// Create the "brands" table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS brands (
      id INTEGER PRIMARY KEY,
      name TEXT,
      image TEXT,
      published BOOLEAN
    )
  `);

  // Insert sample data into the "brands" table
  const brandsData = [
    { name: 'Visa', image: '/img/visa.svg', published: true },
    { name: 'Tyme Bank', image: '/img/tyme.svg', published: true },
    { name: 'Distell', image: '/img/distell.svg', published: true },
    { name: 'Spotify', image: '/img/spotify.svg', published: true },
    { name: 'Microsoft', image: '/img/microsoft.svg', published: true },
    { name: 'Engen', image: '/img/engen.svg', published: true },
    { name: 'Nike', image: '/img/nike.svg', published: true },
    { name: 'Wesgrow', image: '/img/wesgrow.svg', published: true },
    { name: 'Multi-Choice', image: '/img/multichoice.svg', published: true },
    { name: 'Pick\'n Pay', image: '/img/pnp.svg', published: true },
    { name: 'Liquid', image: '/img/liquid.svg', published: true },
    { name: 'TFG', image: '/img/tfg.svg', published: true },
    { name: 'Sanlam', image: '/img/sanlam.svg', published: true },
    { name: 'Santam', image: '/img/santam.svg', published: true },
    { name: 'BBC', image: '/img/bbc.svg', published: true }
  ];

  const insert = db.prepare('INSERT INTO brands (name, image, published) VALUES (?, ?, ?)');
  brandsData.forEach(brand => {
    insert.run(brand.name, brand.image, brand.published);
  });
  insert.finalize();

  console.log('Brands table created and sample data inserted.');
});

// Close the database

//TO run node create-sqlite-db.js

db.close();
