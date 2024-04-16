import { Urbanist_500Medium } from "@expo-google-fonts/urbanist";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

const Subtitle = ({ children, style }) => {
  let [fontLoaded, fontError] = useFonts({
    Urbanist_500Medium,
  });
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <Text style={[styles.p, { fontFamily: "Urbanist_500Medium", ...style }]}>
      {children}
    </Text>
  );
};

export default Subtitle;
const styles = StyleSheet.create({
  p: {
    marginTop: 16,
    color: "rgba(153, 153, 153, 1)",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
  },
});
