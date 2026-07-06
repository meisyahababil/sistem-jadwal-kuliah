// src/screens/SummaryScreen.js
// Halaman A - Ringkasan Mata Kuliah
// Menggunakan .map() pada array statis "mataKuliah".

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import { mataKuliah } from "../data/scheduleData";
import { colors, shadowStyle } from "../theme/colors";

export default function SummaryScreen() {
  const totalSks = mataKuliah.reduce((total, mk) => total + mk.sks, 0);

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ScreenHeader
        title="Ringkasan Matkul"
        subtitle={`${mataKuliah.length} mata kuliah · ${totalSks} SKS · Genap 2025/2026`}
        icon="book-outline"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>Mata Kuliah Semester Ini</Text>

        {/* Rendering list menggunakan .map() sesuai ketentuan tugas */}
        {mataKuliah.map((mk, index) => (
          <View key={mk.id} style={styles.card}>
            <View style={styles.iconWrap}>
              <Ionicons name={mk.icon} size={22} color={colors.primary} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{mk.nama}</Text>
              <Text style={styles.cardSubtitle}>
                {mk.kode} · {mk.sks} SKS · Kelas {mk.kelas}
              </Text>
              <View style={styles.dosenRow}>
                <Ionicons
                  name="person-circle-outline"
                  size={14}
                  color={colors.textMuted}
                />
                <Text style={styles.dosenText}>{mk.dosen}</Text>
              </View>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{index + 1}</Text>
            </View>
          </View>
        ))}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadowStyle,
  },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 15.5,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  dosenRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 4,
  },
  dosenText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  badge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primaryDark,
  },
});
