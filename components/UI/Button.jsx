import { Urbanist_500Medium } from "@expo-google-fonts/urbanist";
import { useFonts } from "expo-font";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const BtnVariant = {
  purple: "purple",
  transparent: "transparent",
};

const Btn = ({ variant, children, style }) => {
  let [fontLoaded, fontError] = useFonts({
    Urbanist_500Medium,
  });
  if (!fontLoaded && !fontError) {
    return null;
  }

  const getStyle = () => {
    switch (variant) {
      case BtnVariant.purple:
        return [styles.Button, styles.purple, style];
      case BtnVariant.transparent:
        return [styles.Button, styles.transparent, style];
    }
  };
  return (
    <TouchableOpacity
      //   onPress={() => alert("Зачем сюда нажимаешь?")}
      style={getStyle()}
    >
      <Text style={[styles.btnText, { fontFamily: "Urbanist_500Medium" }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  Button: {
    paddingVertical: 18,
    width: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  purple: {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(112, 59, 247, 1)",
  },
  transparent: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(38, 38, 38, 1)",
  },
  btnText: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "500",
    fontSize: 24,
  },
});
