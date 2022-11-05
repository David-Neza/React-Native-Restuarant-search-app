import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-paper";
const Profile = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text>Profile</Text>
          <Avatar.Icon size={24} icon="folder" />
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  profile: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#003f5c",
    height: 100,
  },
});
