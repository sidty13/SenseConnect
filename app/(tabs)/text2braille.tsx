import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

type Text2BrailleProps = {
  navigation: any;
};

const Text2Braille: React.FC<Text2BrailleProps> = ({ navigation }) => {
  const [text, setText] = useState<string>("");
  const [brailleOutput, setBrailleOutput] = useState<string>("");

  const convertToBraille = () => {
    const braille = text.split("").map((char: string) => `⠃`).join(" "); // Replace with actual conversion logic
    setBrailleOutput(braille);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SenseConnect</Text>
      <Text style={styles.description}>Bridging touch and technology</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={convertToBraille}>
        <Text style={styles.buttonText}>Convert to Braille</Text>
      </TouchableOpacity>
      {brailleOutput ? (
        <View style={styles.outputContainer}>
          <Text style={styles.outputLabel}>Braille Output:</Text>
          <Text style={styles.output}>{brailleOutput}</Text>
        </View>
      ) : null}

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.backButtonText}>Back to Home</Text>
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
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6D597A",
    marginBottom: 5,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontSize: 18,
    color: "#355070",
    marginBottom: 15,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#B56576",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 18,
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
  outputContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B56576",
    width: "90%",
    alignItems: "center",
  },
  outputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#355070",
    marginBottom: 5,
    fontFamily: "Poppins-SemiBold",
  },
  output: {
    fontSize: 22,
    color: "#6D597A",
    fontFamily: "Poppins-Regular",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#6D597A",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
});

export default Text2Braille;
