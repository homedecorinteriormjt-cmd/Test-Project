const produk = [
  {
    nama: "Sepatu Sneakers",
    harga: "Rp 350.000",
    gambar: "https://via.placeholder.com/200x150?text=Sepatu"
  },
  {
    nama: "Kaos Polos",
    harga: "Rp 80.000",
    gambar: "https://via.placeholder.com/200x150?text=Kaos"
  },
  {
    nama: "Jam Tangan",
    harga: "Rp 500.000",
    gambar: "https://via.placeholder.com/200x150?text=Jam"
  }
];

// Menampilkan produk ke halaman
const container = document.getElementById('produk-container');

produk.forEach(item => {
  const card = document.createElement('div');
  card.className = 'produk-card';
  card.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}">
    <h3>${item.nama}</h3>
    <p>${item.harga}</p>
  `;
  container.appendChild(card);
});
