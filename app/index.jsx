import { Link } from "expo-router";
import { Image, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

import Logo from "../assets/img/logo.png";

// Themed Components
import Spacer from "../components/Spacer";
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>BookNest</Text>

      <Spacer height={10} />
      <Text>ReadingList App</Text>
      <Link style={styles.link} href="/about">
        About Page
      </Link>

      <Link style={styles.link} href="/contact">
        Contact Page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: 180,
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
