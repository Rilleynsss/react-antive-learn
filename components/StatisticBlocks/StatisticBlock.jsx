import { StyleSheet, View } from "react-native";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";

const StatisticBlocks = ({ style }) => {
  return (
    <View style={style}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={[styles.container, { marginRight: 6 }]}>
          <Title>200+</Title>
          <Subtitle>Happy Customers</Subtitle>
        </View>
        <View style={[styles.container, { marginLeft: 6 }]}>
          <Title>200+</Title>
          <Subtitle>Happy Customers</Subtitle>
        </View>
      </View>
      <View style={[styles.container, { marginTop: 12 }]}>
        <Title>16+</Title>
        <Subtitle>Years of Experience</Subtitle>
      </View>
    </View>
  );
};

export default StatisticBlocks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(26, 26, 26, 1)",
    flexGrow: 1,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(38, 38, 38, 1)",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 6,
  },
});
