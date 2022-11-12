import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "./common/styles";
import { useState } from "react";
const SearchBar = ({ setTerm }) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleEndEditing = () => {
    if (!searchCategory) return;
    setTerm(searchCategory);
    setSearchCategory("");
  };
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Restaurant, food"
        value={searchCategory}
        onChangeText={(text) => {
          setSearchCategory(text);
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
