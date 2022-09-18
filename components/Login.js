import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogged, setisLogged] = React.useState("");

  const navigation = useNavigation();
  const handleLogin = () => {
    if (email == "admin" && password == "admin") {
      setisLogged(true);
      navigation.navigate("Home", { isLogged: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
          <Image
            source={require("../assets/login1.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.bodyContent}>
          <Text style={styles.text}>Login to your Account</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.footerText}>
              Don't have an account? Register
            </Text>
            <Text style={styles.footerText}>Forgot password?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    height: "100%",
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  nav: {
    // marginTop: 25,
    padding: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContent: {
    flexgrow: 1,
    paddingHorizontal: 35,
    paddingVertical: 10,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 50,
    color: "#4C4ABE",
    width: 200,
    fontStyle: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,

    justifyContent: "center",
    margin: 10,
    paddingHorizontal: 20,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    width: 75,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
  footer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContent: {
    // flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "black",
    paddingVertical: 2,
  },
});
