import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../static/img/Logo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} />
      <Text>burger</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "rgba(33, 30, 47, 1)",
    height: "8%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
