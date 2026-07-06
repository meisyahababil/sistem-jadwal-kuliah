// src/screens/WeeklyScreen.js
// Halaman C - Jadwal per Hari
// Menggunakan SectionList, dikelompokkan berdasarkan hari.
// Header setiap seksi (nama hari) dibuat berbeda gaya dari item biasa.

import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import { jadwalMingguan } from "../data/scheduleData";
import { colors, shadowStyle } from "../theme/colors";

function ScheduleItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.timeWrap}>
        <Text style={styles.timeText}>{item.jamMulai}</Text>
        <View style={styles.timeDivider} />
        <Text style={styles.timeText}>{item.jamSelesai}</Text>
      </View>

      <View style={styles.verticalLine} />

      <View style={{ flex: 1 }}>
        <Text style={styles.matkulText}>{item.matkul}</Text>
        <View style={styles.roomRow}>
          <Ionicons name="location-outline" size={13} color={colors.primary} />
          <Text style={styles.roomText}>{item.ruang}</Text>
        </View>
      </View>
    </View>
  );
}

// Header seksi (nama hari) — gaya berbeda dari card item: full-width,
// background gradasi pink solid, huruf besar, agar jelas terlihat.
function SectionHeader({ section }) {
  return (
    <View style={styles.sectionHeader}>
      <Ionicons name="calendar-clear-outline" size={16} color={colors.white} />
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
      <View style={styles.sectionCountPill}>
        <Text style={styles.sectionCountText}>{section.data.length} kelas</Text>
      </View>
    </View>
  );
}

export default function WeeklyScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ScreenHeader
        title="Jadwal Mingguan"
        subtitle="Jadwal kuliah dikelompokkan per hari"
        icon="today-outline"
      />

      <SectionList
        sections={jadwalMingguan}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScheduleItem item={item} />}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 14 }} />}
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
    paddingTop: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 9,
    paddingHorizontal: 14,
    gap: 8,
    ...shadowStyle,
  },
  sectionHeaderText: {
    flex: 1,
    fontSize: 14.5,
    fontWeight: "800",
    color: colors.white,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  sectionCountPill: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  sectionCountText: {
    fontSize: 10.5,
    fontWeight: "700",
    color: colors.white,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 13,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadowStyle,
  },
  timeWrap: {
    alignItems: "center",
    width: 54,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primaryDark,
  },
  timeDivider: {
    width: 1.5,
    height: 10,
    backgroundColor: colors.primaryLight,
    marginVertical: 2,
  },
  verticalLine: {
    width: 1,
    height: "80%",
    backgroundColor: colors.border,
    marginHorizontal: 12,
  },
  matkulText: {
    fontSize: 14.5,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  roomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 4,
  },
  roomText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
