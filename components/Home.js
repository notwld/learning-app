import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "./Footer";
import { LinearGradient } from "expo-linear-gradient";
import Progress from "./Progress";
import Section from "./Section";

import { useNavigation } from "@react-navigation/native";

export default function Home(props) {

  const navigation = useNavigation();
  // const isLogged = props.isLogged;
  // if (!isLogged) {
  //   navigation.navigate("Login");
  // }
  // else{
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Home" }],
  //   });

  // }
  const [data, setData] = React.useState([
    {id:1,image:require('../assets/web.png'),title:'Web Development'},
    {id:2,image:require('../assets/digital.png'),title:'Digital Marketing'},
    {id:3,image:require('../assets/uiux.png'),title:'UI/UX'},
    {id:4,image:require('../assets/native.png'),title:'React Native'},
  ]);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.crousal}>
        <LinearGradient colors={['rgba(151, 71, 255, 92.75)', 'rgba(151, 71, 255, 1)','rgba(151, 71, 255, .7)']} style={styles.gradient} />
        <Text style={styles.userName}>Welcome Huzzu</Text>
        <Progress/>
      </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Section category={'Your Courses'} data={data}/>
          <Section category={'Newly Added'} data={data}/>
          <Section category={'Top Rated'} data={data}/>
          </ScrollView>
                    
        </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  crousal: {
    marginHorizontal: 20,
    height: 210,
    padding: 20,
    marginTop: 30,
    marginBottom: 0,
  },
  userName: {
    color: "white",
    fontSize: 30,
    // fontFamily: 'apple-system',
    fontWeight: "bold",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 10,
    height: "100%",
  },
 

});
