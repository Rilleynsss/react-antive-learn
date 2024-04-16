import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  const [task, newTask] = useState(["1111", "1111", "1111", "1111"]);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <HomePage />
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20, 20, 20, 1)",
    alignItems: "center",
  },
  content: {
    margin: 0,
    padding: 0,
    width: "100%",
  },
  text: {
    color: "#fff",
  },
});
