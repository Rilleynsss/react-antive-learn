import { Image, StyleSheet, View } from "react-native";
import building from "../../static/img/building_home_page.png";
import {
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
} from "@expo-google-fonts/urbanist";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";
import Btn, { BtnVariant } from "../UI/Button";
import Properties from "./Blocks/Properties";
import Feedback from "./Blocks/Feedback";
import Questions from "./Blocks/Questions";
import More from "./Blocks/More";
import StatisticBlocks from "../StatisticBlocks/StatisticBlock";
import Opportunity from "../Opportunity/Opportunity";

const HomePage = () => {
  let [fontLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
    Urbanist_500Medium,
  });
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <View style={style.Home}>
      <Image style={style.img} source={building} />
      <Title style={{ marginTop: 56 }}>
        Discover Your Dream Property with Estatein
      </Title>
      <Subtitle style={{ marginBottom: 40 }}>
        Your journey to finding the perfect property begins here. Explore our
        listings to find the home that matches your dreams.
      </Subtitle>
      <Btn variant={BtnVariant.transparent} style={{ marginBottom: 16 }}>
        Learn More
      </Btn>

      <Btn variant={BtnVariant.purple}>Browse Properties</Btn>
      <StatisticBlocks style={{ marginVertical: 40 }} />
      <Opportunity />
      <Properties />
      <Feedback />
      <Questions />
      <More />
    </View>
  );
};

export default HomePage;

const style = StyleSheet.create({
  Home: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 40,
  },
  img: {
    height: 302,
    width: "100%",
    borderRadius: 12,
  },
});
