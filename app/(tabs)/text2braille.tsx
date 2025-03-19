import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [text, setText] = useState<string>("");
  const [brailleOutput, setBrailleOutput] = useState<string>("");

  const convertToBraille = () => {
    // Placeholder logic for conversion
    const braille = text.split("").map((char: string) => `⠃`).join(" "); // Replace with actual conversion logic
    setBrailleOutput(braille);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SenseConnect</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={convertToBraille}>
        <Text style={styles.buttonText}>Convert to Braille</Text>
      </TouchableOpacity>
      {brailleOutput ? <Text style={styles.output}>{brailleOutput}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
