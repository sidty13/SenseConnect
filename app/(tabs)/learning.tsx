import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// TypeScript Interfaces
interface Course {
  id: number;
  title: string;
  date: string;
  description: string;
  detailedDescription: string;
  image: any;
  bgColor: string;
}

const LearningModeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      title: "Basics of Braille",
      date: "March 14, 2025",
      description:
        "Learn how Braille works and how to read and write basic Braille letters.",
      detailedDescription: `Braille is a tactile writing system used by people who are visually impaired. 
      It consists of patterns of raised dots that are read by touch. Each Braille character 
      represents a letter, number, or punctuation mark. Understanding Braille opens up access to reading, 
      writing, and education for blind individuals. 

      In this course, you will explore the Braille alphabet, numbers, and some commonly used words. 
      Interactive exercises will help reinforce learning, making it easier to recognize and write Braille effectively.`,
      image: require("@/assets/images/braille.png"),
      bgColor: "#6D76C6",
    },
    {
      id: 2,
      title: "Basic Sign Language",
      date: "March 19, 2025",
      description:
        "Discover fundamental hand signs and their meanings in sign language.",
      detailedDescription: `Sign language is a visual language that uses hand gestures, facial expressions, 
      and body language to communicate. It is widely used by the deaf and hard-of-hearing communities. 
      Learning basic sign language helps bridge the communication gap and fosters inclusivity.

      This course will introduce you to essential hand shapes, finger spelling, and commonly used phrases. 
      By the end, you'll be able to communicate basic words and sentences, making conversations more accessible 
      for those who rely on sign language.`,
      image: require("@/assets/images/sign_language.png"),
      bgColor: "#F9B233",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>⬅ Learning Mode</Text>
      </TouchableOpacity>

      {/* Course Cards */}
      {courses.map((course) => (
        <View key={course.id} style={[styles.courseCard, { backgroundColor: course.bgColor }]}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDate}>{course.date}</Text>
          <Image source={course.image} style={styles.courseImage} />
          <Text style={styles.courseDescription}>{course.description}</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setSelectedCourse(course)}
          >
            <Text style={styles.startButtonText}>Start Now</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Detailed Description Modal */}
      {selectedCourse && (
        <Modal animationType="slide" transparent={true} visible={!!selectedCourse}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={selectedCourse.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedCourse.title}</Text>
              <Text style={styles.modalDescription}>{selectedCourse.detailedDescription}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedCourse(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

// StyleSheet for UI Design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  courseCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  courseDate: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 10,
  },
  courseImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "center",
  },
  courseDescription: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  startButtonText: {
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#6D76C6",
    padding: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
  },
});

export default LearningModeScreen;
