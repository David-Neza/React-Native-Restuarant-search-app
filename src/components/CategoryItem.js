import { View, Text, StyleSheet, Image } from "react-native";
import { elevation } from "./common/styles";
const CategoryItem = ({ name, imageUrl }) => {
  return (
    <View style={[styles.container, elevation]}>
      <View style={styles.imageCOntainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 14,
    marginHorizontal: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageCOntainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
