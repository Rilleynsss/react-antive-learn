import { StyleSheet, View } from "react-native";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";

const StatisticBlocks = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container}>
          <Title>200+</Title>
          <Subtitle>Happy Customers</Subtitle>
        </View>
        <View style={styles.container}>
          <Title>200+</Title>
          <Subtitle>Happy Customers</Subtitle>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default StatisticBlocks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(26, 26, 26, 1)",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(38, 38, 38, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
});
