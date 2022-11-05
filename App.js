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
import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
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
