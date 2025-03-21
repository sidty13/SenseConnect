import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard"; // Import Clipboard API
import * as Speech from "expo-speech"; // Import Speech API
import { Feather } from "@expo/vector-icons"; // Import icons

const brailleMap: { [key: string]: string } = {
  "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑",
  "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚",
  "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕",
  "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞",
  "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽", "z": "⠵",
  "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑",
  "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊", "0": "⠼⠚",
  " ": " ", ".": "⠲", ",": "⠂", "?": "⠦", "!": "⠖", "-": "⠤",
  "'": "⠄", "\"": "⠦⠴", "/": "⠌", ":": "⠒", ";": "⠆"
};

const convertToBraille = (text: string): string => {
  return text
    .toLowerCase()
    .split("")
    .map((char) => brailleMap[char] || char)
    .join("");
};

const Text2Braille: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [brailleOutput, setBrailleOutput] = useState<string>("");

  const handleConvert = async () => {
    setBrailleOutput(convertToBraille(text)); // Convert text to Braille

    try {
      const response = await fetch("http://192.168.4.1/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `message=${encodeURIComponent(text)}`, // Send entered text (not Braille)
      });

      const data = await response.text();
      alert("Response from ESP8266: " + data);
    } catch (error) {
      console.error("Error sending to ESP8266:", error);
      
    }
  };

  const handleClear = () => {
    setText("");
    setBrailleOutput("");
  };

  const handleCopy = () => {
    if (brailleOutput) {
      Clipboard.setStringAsync(brailleOutput);
      alert("Braille copied to clipboard!");
    }
  };

  const handleSpeak = () => {
    if (text) {
      Speech.speak(text, {
        language: "en",
        pitch: 1.0,
        rate: 1.0,
      });
    }
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

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleConvert}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {brailleOutput ? (
        <View style={styles.outputContainer}>
          <Text style={styles.outputLabel}>Braille Output:</Text>
          <Text style={styles.output}>{brailleOutput}</Text>

          <View style={styles.iconRow}>
            <TouchableOpacity onPress={handleCopy}>
              <Feather name="copy" size={24} color="#B56576" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSpeak}>
              <Feather name="volume-2" size={24} color="#6D597A" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
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
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  button: {
    backgroundColor: "#B56576",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flex: 1,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: "#6D597A",
  },
  buttonText: {
    color: "#F8EDEB",
    fontSize: 18,
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
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "40%",
  },
});

export default Text2Braille;
