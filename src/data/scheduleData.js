// src/data/scheduleData.js
// Semua data di file ini bersifat statis (hardcode), sesuai ketentuan tugas.
// Data mata kuliah diambil dari KRS Meisyah Ababil, Semester Genap 2025/2026.
// Digunakan bersama oleh SummaryScreen (map), MeetingsScreen (FlatList),
// dan WeeklyScreen (SectionList).

// ------------------------------------------------------------------
// A. Data Mata Kuliah Semester Ini
// ------------------------------------------------------------------
export const mataKuliah = [
  {
    id: "MK-01",
    kode: "STI2546142",
    nama: "Pemrograman Mobile",
    sks: 3,
    kelas: "C",
    dosen: "Panji Rachmat Setiawan, S.Kom., MMSI",
    icon: "phone-portrait-outline",
  },
  {
    id: "MK-02",
    kode: "STI2546143",
    nama: "Switching Routing dan Jaringan Nirkabel",
    sks: 3,
    kelas: "E",
    dosen: "Dr. Apri Siswanto, S.Kom., M.Kom",
    icon: "git-network-outline",
  },
  {
    id: "MK-03",
    kode: "-",
    nama: "Implementasi dan Pengujian Perangkat Lunak",
    sks: 3,
    kelas: "F",
    dosen: "Panji Rachmat Setiawan, S.Kom., MMSI",
    icon: "construct-outline",
  },
  {
    id: "MK-04",
    kode: "-",
    nama: "Big Data",
    sks: 3,
    kelas: "E",
    dosen: "Mulyanto, S.T., M.Cs., Ph.D",
    icon: "server-outline",
  },
  {
    id: "MK-05",
    kode: "STI2545250",
    nama: "Pemrosesan Bahasa Alami",
    sks: 3,
    kelas: "A",
    dosen: "Prof. Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT",
    icon: "chatbubble-ellipses-outline",
  },
  {
    id: "MK-06",
    kode: "STI2540165",
    nama: "Kerja Praktek",
    sks: 2,
    kelas: "A",
    dosen: "Team Teaching",
    icon: "briefcase-outline",
  },
  {
    id: "MK-07",
    kode: "STI2546141",
    nama: "Pembelajaran Mesin",
    sks: 3,
    kelas: "A",
    dosen: "Ause Labellapansa, S.T., M.Cs., M.Kom",
    icon: "hardware-chip-outline",
  },
];

// ------------------------------------------------------------------
// B. Data Daftar Pertemuan (dipakai FlatList, minimal 10 item -> 21 item)
// ------------------------------------------------------------------
export const daftarPertemuan = [
  { id: "P-01", matkul: "Pemrograman Mobile", pertemuanKe: 1, topik: "Pengenalan React Native & Expo", tanggal: "02 Feb 2026" },
  { id: "P-02", matkul: "Pemrograman Mobile", pertemuanKe: 2, topik: "Komponen, State, dan Props", tanggal: "09 Feb 2026" },
  { id: "P-03", matkul: "Pemrograman Mobile", pertemuanKe: 3, topik: "Rendering List: map, FlatList, SectionList", tanggal: "16 Feb 2026" },
  { id: "P-04", matkul: "Switching Routing dan Jaringan Nirkabel", pertemuanKe: 1, topik: "Konsep Routing dan Switching Lanjut", tanggal: "03 Feb 2026" },
  { id: "P-05", matkul: "Switching Routing dan Jaringan Nirkabel", pertemuanKe: 2, topik: "Konfigurasi VLAN dan Inter-VLAN Routing", tanggal: "10 Feb 2026" },
  { id: "P-06", matkul: "Switching Routing dan Jaringan Nirkabel", pertemuanKe: 3, topik: "Implementasi Wireless LAN Controller", tanggal: "17 Feb 2026" },
  { id: "P-07", matkul: "Implementasi dan Pengujian Perangkat Lunak", pertemuanKe: 1, topik: "Perencanaan Pengujian Perangkat Lunak", tanggal: "05 Feb 2026" },
  { id: "P-08", matkul: "Implementasi dan Pengujian Perangkat Lunak", pertemuanKe: 2, topik: "Unit Testing dan Integration Testing", tanggal: "12 Feb 2026" },
  { id: "P-09", matkul: "Implementasi dan Pengujian Perangkat Lunak", pertemuanKe: 3, topik: "Studi Kasus Pengujian Aplikasi Web", tanggal: "19 Feb 2026" },
  { id: "P-10", matkul: "Big Data", pertemuanKe: 1, topik: "Ekosistem Hadoop dan HDFS", tanggal: "03 Feb 2026" },
  { id: "P-11", matkul: "Big Data", pertemuanKe: 2, topik: "Pengolahan Data dengan MapReduce", tanggal: "10 Feb 2026" },
  { id: "P-12", matkul: "Big Data", pertemuanKe: 3, topik: "Analisis Big Data dengan Apache Spark", tanggal: "17 Feb 2026" },
  { id: "P-13", matkul: "Pemrosesan Bahasa Alami", pertemuanKe: 1, topik: "Text Preprocessing dan Tokenisasi", tanggal: "04 Feb 2026" },
  { id: "P-14", matkul: "Pemrosesan Bahasa Alami", pertemuanKe: 2, topik: "Word Embedding dan Vektorisasi Teks", tanggal: "11 Feb 2026" },
  { id: "P-15", matkul: "Pemrosesan Bahasa Alami", pertemuanKe: 3, topik: "Pengenalan Large Language Model", tanggal: "18 Feb 2026" },
  { id: "P-16", matkul: "Kerja Praktek", pertemuanKe: 1, topik: "Pembekalan dan Penempatan Kerja Praktek", tanggal: "06 Feb 2026" },
  { id: "P-17", matkul: "Kerja Praktek", pertemuanKe: 2, topik: "Bimbingan Laporan Kerja Praktek", tanggal: "13 Feb 2026" },
  { id: "P-18", matkul: "Kerja Praktek", pertemuanKe: 3, topik: "Presentasi Hasil Kerja Praktek", tanggal: "20 Feb 2026" },
  { id: "P-19", matkul: "Pembelajaran Mesin", pertemuanKe: 1, topik: "Supervised dan Unsupervised Learning", tanggal: "02 Feb 2026" },
  { id: "P-20", matkul: "Pembelajaran Mesin", pertemuanKe: 2, topik: "Decision Tree, Random Forest, dan SVM", tanggal: "09 Feb 2026" },
  { id: "P-21", matkul: "Pembelajaran Mesin", pertemuanKe: 3, topik: "Evaluasi Model dan Hyperparameter Tuning", tanggal: "16 Feb 2026" },
];

// ------------------------------------------------------------------
// C. Data Jadwal Mingguan, sudah dikelompokkan per hari (untuk SectionList)
// Format section: { title, data: [...] }
// ------------------------------------------------------------------
export const jadwalMingguan = [
  {
    title: "Senin",
    data: [
      { id: "S-01", matkul: "Pemrograman Mobile", ruang: "A201", jamMulai: "08.00", jamSelesai: "10.30" },
      { id: "S-02", matkul: "Pembelajaran Mesin", ruang: "Lab AI", jamMulai: "13.00", jamSelesai: "15.30" },
    ],
  },
  {
    title: "Selasa",
    data: [
      { id: "S-03", matkul: "Big Data", ruang: "C301", jamMulai: "09.00", jamSelesai: "11.30" },
      { id: "S-04", matkul: "Switching Routing dan Jaringan Nirkabel", ruang: "Lab Jaringan", jamMulai: "13.00", jamSelesai: "15.30" },
    ],
  },
  {
    title: "Rabu",
    data: [
      { id: "S-05", matkul: "Pemrosesan Bahasa Alami", ruang: "A301", jamMulai: "10.00", jamSelesai: "12.30" },
    ],
  },
  {
    title: "Kamis",
    data: [
      { id: "S-06", matkul: "Implementasi dan Pengujian Perangkat Lunak", ruang: "Lab RPL", jamMulai: "08.00", jamSelesai: "10.30" },
    ],
  },
  {
    title: "Jumat",
    data: [
      { id: "S-07", matkul: "Kerja Praktek", ruang: "Ruang Bimbingan KP", jamMulai: "08.00", jamSelesai: "09.40" },
    ],
  },
];
