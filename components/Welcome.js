import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(151, 71, 255, 92.75)', 'rgba(151, 71, 255, 1)','rgba(151, 71, 255, 0)']}
        style={styles.background}
      />
          <View style={styles.heading}>
              <Text style={styles.text}>Welcome to the</Text>
              <Text style={styles.appName}>Both Learning</Text>
          </View>
          <View style={styles.logo}>
            <Image source={require('../assets/welicon3.png')} />
          </View>
          <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Login")}}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Signup")}}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#4C4ABE',
    fontSize: 20,
    fontWeight: 'bold',
  },

})