import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

import Logo from "../assets/img/logo.png";

// Themed Components
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <ThemedText style={styles.title} title={true}>
        BookNest
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>ReadingList App</ThemedText>
      <Spacer />

      <Link style={styles.link} href="/login">
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link style={styles.link} href="/register">
        <ThemedText>Register Page</ThemedText>
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
    fontSize: 28,
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: 150,
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
