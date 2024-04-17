import { View } from "react-native";
import Title from "../../UI/Title";
import Subtitle from "../../UI/Subtitle";
import Btn, { BtnVariant } from "../../UI/Button";

const More = () => {
  return (
    <View>
      <Title>Start Your Real Estate Journey Today</Title>
      <Subtitle>
        Your dream property is just a click away. Whether you're looking for a
        new home, a strategic investment, or expert real estate advice, Estatein
        is here to assist you every step of the way. Take the first step towards
        your real estate goals and explore our available properties or get in
        touch with our team for personalized assistance.
      </Subtitle>
      <Btn variant={BtnVariant.purple}>Explore Properties</Btn>
    </View>
  );
};

export default More;
