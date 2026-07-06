# Sistem Jadwal Kuliah — React Native (Expo)

**Tugas Praktikum Pemrograman Mobile — Handling Lists & Data Rendering**

| | |
|---|---|
| Nama | Meisyah Ababil |
| NPM | 233510092 |
| Semester | 6 |
| Program Studi | Teknik Informatika |
| Universitas | Universitas Islam Riau |

## Deskripsi

Aplikasi ini menampilkan jadwal perkuliahan mahasiswa dalam tiga halaman,
masing-masing memakai teknik rendering list yang berbeda sesuai ketentuan
tugas. Semua data bersifat statis (hardcode), belum terhubung ke API atau
database apapun. Tema visual aplikasi: **pink & putih**, dengan gradient,
shadow lembut, dan sudut membulat supaya tidak terasa kaku.

## Struktur Halaman

1. **Ringkasan** (`SummaryScreen.js`) — daftar seluruh mata kuliah semester
   ini, dirender memakai `.map()` pada array statis. Menampilkan nama
   matkul, kode, SKS, dan dosen pengampu, dengan `key` unik per item.
2. **Pertemuan** (`MeetingsScreen.js`) — daftar 21 pertemuan dari seluruh
   mata kuliah, dirender memakai `FlatList` lengkap dengan:
   - `keyExtractor` — key unik per pertemuan
   - `ItemSeparatorComponent` — garis pemisah antar item
   - `ListHeaderComponent` — judul halaman & ringkasan total pertemuan
   - `ListEmptyComponent` — tampilan saat data kosong (bisa dites dengan
     mengganti `DATA_PERTEMUAN` di `MeetingsScreen.js` menjadi `[]`)
3. **Mingguan** (`WeeklyScreen.js`) — jadwal kuliah dikelompokkan per hari
   memakai `SectionList`. Header setiap hari dibuat solid pink dengan
   huruf kapital, jelas berbeda dari card item di bawahnya.

## Data Mata Kuliah (Semester Genap 2025/2026)

| Kode | Mata Kuliah | SKS | Kelas | Dosen |
|---|---|---|---|---|
| STI2546142 | Pemrograman Mobile | 3 | C | Panji Rachmat Setiawan, S.Kom., MMSI |
| STI2546143 | Switching Routing dan Jaringan Nirkabel | 3 | E | Dr. Apri Siswanto, S.Kom., M.Kom |
| - | Implementasi dan Pengujian Perangkat Lunak | 3 | F | Panji Rachmat Setiawan, S.Kom., MMSI |
| - | Big Data | 3 | E | Mulyanto, S.T., M.Cs., Ph.D |
| STI2545250 | Pemrosesan Bahasa Alami | 3 | A | Prof. Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT |
| STI2540165 | Kerja Praktek | 2 | A | Team Teaching |
| STI2546141 | Pembelajaran Mesin | 3 | A | Ause Labellapansa, S.T., M.Cs., M.Kom |

## Struktur Folder

```
jadwal-kuliah-app/
├── App.js                     # Entry point + bottom tab navigator
├── app.json
├── babel.config.js
├── package.json
└── src/
    ├── data/
    │   └── scheduleData.js    # Semua data statis (matkul, pertemuan, jadwal)
    ├── theme/
    │   └── colors.js          # Palet warna pink-putih terpusat
    ├── components/
    │   └── ScreenHeader.js    # Header gradient reusable
    └── screens/
        ├── SummaryScreen.js   # Halaman A (.map())
        ├── MeetingsScreen.js  # Halaman B (FlatList)
        └── WeeklyScreen.js    # Halaman C (SectionList)
```

## Cara Menjalankan

Project ini pakai **Expo SDK 54**, disesuaikan dengan versi Expo Go yang saat
ini tersedia di App Store dan Play Store (per Juli 2026). Pastikan sudah
menginstal [Node.js](https://nodejs.org) dan aplikasi **Expo Go** terbaru di
HP (Android/iOS).

Kalau muncul pesan error versi tidak cocok saat scan QR code, cek dulu SDK
berapa yang didukung Expo Go kamu (biasanya muncul di pesan errornya), lalu
kabari aku supaya package.json bisa disesuaikan lagi.

```bash
# 1. Masuk ke folder project
cd jadwal-kuliah-app

# 2. Install dependency
npm install

# 3. Jalankan Expo
npx expo start
```

Setelah itu, scan QR code yang muncul di terminal memakai aplikasi
Expo Go, atau tekan `a` untuk membuka di emulator Android / `i` untuk
simulator iOS.

## Catatan Pengembangan

- Semua data ada di satu file (`src/data/scheduleData.js`) agar mudah
  diubah tanpa menyentuh kode tampilan.
- Warna dipusatkan di `src/theme/colors.js` supaya konsisten dan mudah
  diganti jika suatu saat tema ingin diubah.
- Ikon memakai `@expo/vector-icons` (Ionicons) yang sudah termasuk dalam
  paket Expo, tidak perlu install tambahan.
