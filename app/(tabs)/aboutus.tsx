import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

const AboutUsPage: React.FC = () => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🌟 About SenseConnect</Text>
        <Text style={styles.subtitle}>Innovating Communication with Technology & Empathy</Text>

        <Text style={styles.sectionTitle}>🌍 Our Mission</Text>
        <Text style={styles.sectionText}>
          We aim to empower the visually impaired community by bridging the gap between traditional Braille and modern technology.
          SenseConnect offers a seamless and intuitive way to translate text and speech into tactile Braille vibrations.
        </Text>

        <Text style={styles.sectionTitle}>💡 Our Vision</Text>
        <Text style={styles.sectionText}>
          To make communication accessible to everyone, everywhere.{"\n"}
          We envision a world where assistive technology is both powerful and easy to use.
        </Text>

        <Text style={styles.sectionTitle}>🚀 Why SenseConnect?</Text>
        <Text style={styles.sectionText}>
          • Accessible design for all users.{"\n"}
          • Innovative Braille-to-vibration technology.{"\n"}
          • Focus on learning, independence, and inclusion.
        </Text>

        <Text style={styles.sectionTitle}>🤝 Meet the Team</Text>
        <Text style={styles.sectionText}>
          We are a passionate group of engineers, designers, and accessibility advocates committed to breaking down communication barriers.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/Menupage")}>
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF0F5',
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 22,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
    color: '#d81b60',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 6,
    color: '#333',
  },
  sectionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#B56576',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#d6336c',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AboutUsPage;