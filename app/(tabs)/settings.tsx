import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontChanged, setFontChanged] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const [language, setLanguage] = useState("English");
  const [privacyModal, setPrivacyModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const scaleAnim = useState(new Animated.Value(1))[0];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    Animated.timing(scaleAnim, {
      toValue: darkMode ? 1 : 1.1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={[
        styles.container,
        darkMode ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <Text
        style={[
          styles.header,
          darkMode ? styles.darkText : styles.lightText,
          fontChanged && styles.boldFont,
        ]}
      >
        SETTINGS
      </Text>

      {/* Change Font */}
      <TouchableOpacity style={styles.option} onPress={() => setFontChanged(!fontChanged)}>
        <FontAwesome5 name="font" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={[styles.optionText, fontChanged && styles.boldFont]}>Change the font</Text>
        <Switch value={fontChanged} onValueChange={setFontChanged} />
      </TouchableOpacity>

      {/* Dark Mode */}
      <TouchableOpacity style={styles.option} onPress={toggleDarkMode}>
        <MaterialIcons name="dark-mode" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </TouchableOpacity>

      {/* Notifications */}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="notifications" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </TouchableOpacity>

      {/* Haptic Feedback */}
      <TouchableOpacity style={styles.option}>
        <FontAwesome5 name="mobile-alt" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Haptic Feedback</Text>
        <Switch value={hapticFeedback} onValueChange={setHapticFeedback} />
      </TouchableOpacity>

      {/* Sound Effects */}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="volume-high" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Sound Effects</Text>
        <Switch value={soundEffects} onValueChange={setSoundEffects} />
      </TouchableOpacity>

      {/* Language Selection */}
      <TouchableOpacity style={styles.option}>
        <FontAwesome5 name="globe" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Language</Text>
        <Text style={styles.value}>{language}</Text>
      </TouchableOpacity>

      {/* Privacy Settings */}
      <TouchableOpacity style={styles.option} onPress={() => setPrivacyModal(true)}>
        <FontAwesome5 name="lock" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>

      {/* Account Settings */}
      <TouchableOpacity style={styles.option} onPress={() => setAccountModal(true)}>
        <FontAwesome5 name="user-cog" size={20} color={darkMode ? "white" : "#6D28D9"} />
        <Text style={styles.optionText}>Account Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  lightBackground: { backgroundColor: "#F8FAFC" },
  darkBackground: { backgroundColor: "#121212" },
  darkText: { color: "#F8FAFC" },
  lightText: { color: "#374151" },
  boldFont: { fontWeight: "bold" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  optionText: { flex: 1, marginLeft: 10, fontSize: 16 },
  value: { fontSize: 16, fontWeight: "bold", color: "#6D28D9" },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { width: 300, backgroundColor: "white", padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  modalOption: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  modalClose: { marginTop: 10, alignSelf: "center" },
});

export default SettingsScreen;
