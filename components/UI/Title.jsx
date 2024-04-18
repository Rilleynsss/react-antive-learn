import { Urbanist_600SemiBold } from "@expo-google-fonts/urbanist";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

const Title = ({ children, style }) => {
  let [fontLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
  });
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <Text style={[styles.h1, { fontFamily: "Urbanist_600SemiBold" }, style]}>
      {children}
    </Text>
  );
};

export default Title;
const styles = StyleSheet.create({
  h1: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "600",
    fontSize: 35,
    lineHeight: 33.6,
    // marginTop: 56,
  },
});
