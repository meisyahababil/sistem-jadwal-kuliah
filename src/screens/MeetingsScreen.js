// src/screens/MeetingsScreen.js
// Halaman B - Daftar Pertemuan
// Menggunakan FlatList dengan keyExtractor, ItemSeparatorComponent,
// ListHeaderComponent, dan ListEmptyComponent.

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import { daftarPertemuan } from "../data/scheduleData";
import { colors, shadowStyle } from "../theme/colors";

// Ganti ke [] untuk melihat tampilan ListEmptyComponent saat data kosong.
const DATA_PERTEMUAN = daftarPertemuan;

function MeetingItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.meetingNumberWrap}>
        <Text style={styles.meetingNumber}>{item.pertemuanKe}</Text>
        <Text style={styles.meetingLabel}>Ke-</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.matkul}>{item.matkul}</Text>
        <Text style={styles.topik}>{item.topik}</Text>

        <View style={styles.dateRow}>
          <Ionicons
            name="calendar-outline"
            size={13}
            color={colors.primary}
          />
          <Text style={styles.dateText}>{item.tanggal}</Text>
        </View>
      </View>
    </View>
  );
}

// ListHeaderComponent: judul halaman + ringkasan total pertemuan.
function ListHeader() {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderTitle}>Daftar Pertemuan</Text>
      <Text style={styles.listHeaderSubtitle}>
        Total {DATA_PERTEMUAN.length} pertemuan · Semester Genap 2025/2026
      </Text>
    </View>
  );
}

// ItemSeparatorComponent: garis pemisah tipis antar item.
function ItemSeparator() {
  return <View style={styles.separator} />;
}

// ListEmptyComponent: tampil jika data pertemuan kosong.
function ListEmpty() {
  return (
    <View style={styles.emptyWrap}>
      <Ionicons name="file-tray-outline" size={40} color={colors.primaryLight} />
      <Text style={styles.emptyTitle}>Belum Ada Pertemuan</Text>
      <Text style={styles.emptySubtitle}>
        Data pertemuan untuk semester ini belum tersedia.
      </Text>
    </View>
  );
}

export default function MeetingsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ScreenHeader
        title="Daftar Pertemuan"
        subtitle="Rekap seluruh pertemuan mata kuliah"
        icon="list-outline"
      />

      <FlatList
        data={DATA_PERTEMUAN}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeetingItem item={item} />}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 24,
    flexGrow: 1,
  },
  listHeader: {
    marginBottom: 14,
  },
  listHeaderTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  listHeaderSubtitle: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginTop: 3,
  },
  separator: {
    height: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadowStyle,
  },
  meetingNumberWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  meetingNumber: {
    fontSize: 17,
    fontWeight: "800",
    color: colors.white,
    lineHeight: 20,
  },
  meetingLabel: {
    fontSize: 9,
    color: "rgba(255,255,255,0.85)",
    marginTop: -2,
  },
  matkul: {
    fontSize: 14.5,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  topik: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginTop: 3,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    gap: 5,
  },
  dateText: {
    fontSize: 11.5,
    color: colors.primaryDark,
    fontWeight: "600",
  },
  emptyWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
