// Array kata-kata untuk bagian depan nama
const depanNama = [
  "Gagah",
  "Sakti",
  "Mega",
  "Jaya",
  "Bintang",
  "Agung",
  "Maju",
  "Utama",
];

// Array kata-kata untuk bagian tengah nama
const tengahNama = [
  "Tekno",
  "Mitra",
  "Cahaya",
  "Maju",
  "Nusa",
  "Bakti",
  "Karya",
  "Maju",
];

// Array kata-kata untuk bagian belakang nama
const belakangNama = [
  "Mandiri",
  "Cemerlang",
  "Makmur",
  "Jaya",
  "Maju",
  "Berlian",
  "Sejahtera",
  "Utama",
];

// Fungsi untuk menghasilkan nama acak
function generateNama() {
  const randomDepan = depanNama[Math.floor(Math.random() * depanNama.length)];
  const randomTengah =
    tengahNama[Math.floor(Math.random() * tengahNama.length)];
  const randomBelakang =
    belakangNama[Math.floor(Math.random() * belakangNama.length)];

  return `${randomDepan} ${randomTengah} ${randomBelakang}`;
}

// Menghasilkan dan menampilkan nama acak
const nama = generateNama();
console.log(`Nama yang dihasilkan: ${nama}`);
