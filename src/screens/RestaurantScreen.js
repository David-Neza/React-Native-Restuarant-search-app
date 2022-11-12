import { useEffect, useState } from "react";
import { View, Image, Text, Dimensions, ActivityIndicator } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  const dimensions = Dimensions.get("window");
  const imageWIdth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  console.log("*****************************************my pics", data);
  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  return (
    <View>
      {data?.map((item) => {
        return (
          <Image
            source={{ uri: item }}
            style={{ with: imageWIdth, height: imageHeight }}
          />
        );
      })}
    </View>
  );
};

export default RestaurantScreen;
