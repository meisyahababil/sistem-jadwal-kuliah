// App.js
// Entry point aplikasi. Memakai bottom tab navigator supaya
// perpindahan antar 3 halaman terasa natural seperti aplikasi nyata.

import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SummaryScreen from "./src/screens/SummaryScreen";
import MeetingsScreen from "./src/screens/MeetingsScreen";
import WeeklyScreen from "./src/screens/WeeklyScreen";
import { colors } from "./src/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Ringkasan: { active: "book", inactive: "book-outline" },
  Pertemuan: { active: "list", inactive: "list-outline" },
  Mingguan: { active: "today", inactive: "today-outline" },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle: {
              backgroundColor: colors.card,
              borderTopWidth: 0,
              height: 68,
              paddingBottom: 10,
              paddingTop: 8,
              shadowColor: colors.shadow,
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 10,
            },
            tabBarLabelStyle: {
              fontSize: 11.5,
              fontWeight: "600",
            },
            tabBarIcon: ({ focused, color, size }) => {
              const iconSet = TAB_ICONS[route.name];
              const iconName = focused ? iconSet.active : iconSet.inactive;
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Ringkasan"
            component={SummaryScreen}
            options={{ title: "Ringkasan" }}
          />
          <Tab.Screen
            name="Pertemuan"
            component={MeetingsScreen}
            options={{ title: "Pertemuan" }}
          />
          <Tab.Screen
            name="Mingguan"
            component={WeeklyScreen}
            options={{ title: "Mingguan" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
