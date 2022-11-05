// import * as React from "react";
// import { AppRegistry } from "react-native";
// import { Provider as PaperProvider } from "react-native-paper";
// import { MD3LightTheme as DefaultTheme } from "react-native-paper";

// import Profile from "./components/profile/profile";

// // const theme = {
// //   ...DefaultTheme,
// //   colors: {
// //     ...DefaultTheme.colors,
// //     primary: "tomato",
// //     secondary: "yellow",
// //   },
// // };

// export default function App() {
//   return (
//     <PaperProvider theme={theme}>
//       <Profile />
//     </PaperProvider>
//   );
// }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: "column",
// //     justifyContent: "flex-start",
// //   },
// // });

import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <FlatList
        data={commonCategories}
        renderItem={({ item }) => {
          return <CategoryItem name={item.name} imageUrl={item.imageUrl} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   background: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
