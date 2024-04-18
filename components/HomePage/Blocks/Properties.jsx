import { Image, View } from "react-native";
import Title from "../../UI/Title";
import Subtitle from "../../UI/Subtitle";
import stars from "../../../static/img/stars.png";

const Properties = () => {
  return (
    <View style={{ paddingTop: 80 }}>
      <Image source={stars} />
      <Title style={{ marginTop: 7 }}>Featured Properties</Title>
      <Subtitle>
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </Subtitle>
    </View>
  );
};

export default Properties;
