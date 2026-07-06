// src/theme/colors.js
// Palet warna terpusat supaya konsisten di semua halaman.
// Tema: Pink & Putih, lembut tapi tetap cerah.

export const colors = {
  primary: "#FF6F9C", // pink utama, dipakai untuk header & aksen
  primaryDark: "#E85585",
  primaryLight: "#FFC1D8",
  secondary: "#FFE3ED", // pink pucat untuk background section
  background: "#FFF7FA", // hampir putih dengan sentuhan pink
  card: "#FFFFFF",
  border: "#FFD6E5",
  textPrimary: "#3A2233",
  textSecondary: "#8C6A78",
  textMuted: "#B98CA0",
  white: "#FFFFFF",
  shadow: "#E85585",
  success: "#6FCF97",
  gradientStart: "#FF8FB1",
  gradientEnd: "#FF6F9C",
};

export const shadowStyle = {
  shadowColor: colors.shadow,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 4,
};

export default colors;
