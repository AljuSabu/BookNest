import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/images/favicon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number One</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>ReadingList App</Text>
      <Link style={styles.link} href="/about">
        About Page
      </Link>

      <Link style={styles.link} href="/contact">
        Contact Page
      </Link>
    </View>
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
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
