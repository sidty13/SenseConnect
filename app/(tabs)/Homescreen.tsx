import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.brailleText}>⠺⠑⠇⠉⠕⠍⠑</Text>
      
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bridging touch and technology</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NextScreen")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8EDEB", // Pastel peach background
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
    color: "#6D597A", // Modern muted purple
    marginBottom: 25,
    fontFamily: "Poppins-Bold", // Creative font
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color:"rgb(59, 107, 167)", // Deep muted blue
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold", // Modern font
  },
  brailleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6D597A", // Muted purple
    marginBottom: 40,
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#B56576", // Pastel rose button
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
    color: "#F8EDEB", // Soft pastel text
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
});

export default HomeScreen;
