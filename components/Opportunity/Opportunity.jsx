import { Image, StyleSheet, View } from "react-native";
import house from "../../static/img/home_icon.png";
import Title from "../UI/Title";
import { Shadow } from "react-native-shadow-2";

const Opportunity = () => {
  return (
    <Shadow
      distance={4}
      startColor="rgba(25, 25, 25, 1)"
      endColor="rgba(25, 25, 25, 1)"
    >
      <View style={styles.cards}>
        <View style={styles.card}>
          <Image source={house} />
          <Title style={{ textAlign: "center", fontSize: 17, marginTop: 14 }}>
            Find Your Dream Home
          </Title>
        </View>
        <View style={styles.card}>
          <Image source={house} />
          <Title style={{ textAlign: "center", fontSize: 17, marginTop: 14 }}>
            Unlock Property Value
          </Title>
        </View>
        <View style={styles.card}>
          <Image source={house} />
          <Title style={{ textAlign: "center", fontSize: 17, marginTop: 14 }}>
            Effortless Property Management
          </Title>
        </View>
        <View style={styles.card}>
          <Image source={house} />
          <Title style={{ textAlign: "center", fontSize: 17, marginTop: 14 }}>
            Smart Investments, Informed Decisions
          </Title>
        </View>
      </View>
    </Shadow>
  );
};

export default Opportunity;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(38, 38, 38, 1)",
  },
  card: {
    backgroundColor: "rgba(26, 26, 26, 1)",
    width: "47%",
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(38, 38, 38, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
