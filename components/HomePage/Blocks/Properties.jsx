import { View } from "react-native";
import Title from "../../UI/Title";
import Subtitle from "../../UI/Subtitle";
import StatisticBlocks from "../../StatisticBlocks/StatisticBlock";

const Properties = () => {
  return (
    <View>
      <Title>Featured Properties</Title>
      <Subtitle>
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </Subtitle>
      <StatisticBlocks />
    </View>
  );
};

export default Properties;
