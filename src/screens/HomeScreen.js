import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png"),
    },
  ];
  const [term, setTerm] = useState("Burger");

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253,253,253)",
    flex: 1,
  },
});
