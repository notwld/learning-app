import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faHome, faUser,faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <FontAwesomeIcon icon={faHome} color={'white'} size={20}/>
        <FontAwesomeIcon icon={faBell} color={'white'} size={20}/>
        <FontAwesomeIcon icon={faWindowMaximize} color={'white'} size={20}/>
        <FontAwesomeIcon icon={faUser} color={'white'} size={20}/>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        // right: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },


})