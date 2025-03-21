import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router"; // Import router

const HomeScreen: React.FC = () => {
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.brailleText}>⠺⠑⠇⠉⠕⠍⠑</Text>

      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Empowering Communication Through Touch</Text>

      {/* Navigate to Text2Braille screen */}

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Menupage")}>
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.button, { marginTop: 20, backgroundColor: "#6D597A"  }]} onPress={() => router.push("/aboutus")}>
  <Text style={styles.buttonText}>Know about us</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8EDEB",
    padding: 20,
  },
  logo: {
    width: 240,
    height: 240,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6D597A",
    marginBottom: 25,
    fontFamily: "Poppins-Bold",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(59, 107, 167)",
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold",
  },
  brailleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6D597A",
    marginBottom: 40,
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#B56576",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#F8EDEB",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
});

export default HomeScreen;