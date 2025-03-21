import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRouter } from "expo-router";

type RootStackParamList = {
  Guide: undefined;
  Home: undefined;
};

type GuidePageProps = NativeStackScreenProps<RootStackParamList, 'Guide'>;

const GuidePage: React.FC<GuidePageProps> = ({ navigation }) => {
    const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SenseConnect User Guide</Text>
      <Text style={styles.subtitle}>Empowering Communication Through Touch</Text>

      <View style={[styles.section, { backgroundColor: '#FFE4EC' }]}>
        <Text style={styles.sectionTitle}>1. How SenseConnect Works</Text>
        <Text style={styles.sectionText}>
          SenseConnect translates English text into Braille and delivers it via vibration patterns on your device.
          Each Braille dot (1-6) is represented by a distinct vibrating motor.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#E3F2FD' }]}>
        <Text style={styles.sectionTitle}>2. Getting Started</Text>
        <Text style={styles.sectionText}>
          • Download SenseConnect from your app store.{"\n"}
          • Open the app and grant vibration permissions.{"\n"}
          • Customize your vibration preferences in the settings.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#FFF3E0' }]}>
        <Text style={styles.sectionTitle}>3. Translating Text to Braille Vibrations</Text>
        <Text style={styles.sectionText}>
          • Enter text in the input field.{"\n"}
          • Tap "Convert" to feel the Braille vibrations.{"\n"}
          • Use the clear buttons to clear the text in the text box.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#E8F5E9' }]}>
        <Text style={styles.sectionTitle}>4. Vibration Settings & Customization</Text>
        <Text style={styles.sectionText}>
          • Adjust vibration intensity, speed, and intervals.{"\n"}
          • Choose between soft or strong vibration feedback.{"\n"}
          • Combine vibration with sound cues for learning.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#F3E5F5' }]}>
        <Text style={styles.sectionTitle}>5. Accessibility Features</Text>
        <Text style={styles.sectionText}>
          • Voice commands support.{"\n"}
          • Text-to-Speech to read input aloud.{"\n"}
          • Large buttons for easy use.
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#FFEBEE' }]}>
        <Text style={styles.sectionTitle}>6. FAQs & Support</Text>
        <Text style={styles.sectionText}>
          • Q: Does it support Grade 2 Braille?{"\n"} 
          A: Grade 1 supported now; Grade 2 is coming soon.{"\n\n"}
          • Q: Can I use it offline?{"\n"}
          A: Yes, no internet required after setup.{"\n\n"}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Menupage")}>
        <Text style={styles.buttonText}>⬅ Back to Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#FFFFFF', // light pink background
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#d81b60', // bold pink
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  section: {
    marginBottom: 20,
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#212121',
  },
  sectionText: {
    fontSize: 14,
    color: '#424242',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#B56576',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 30,
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

export default GuidePage;


