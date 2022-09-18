import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Section({category,data}) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.category}>{category}</Text>
      <View>
        <FlatList 
            data={data}
            renderItem={({item}) => 
                <View style={styles.courses}>
                    <Image source={item.image} style={{width: 100, height: 100}}/>
                    <Text style={styles.courseName}>{item.title}</Text>
                </View>
        }
            numColumns={2}
            keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
        // paddingVertical: 20,
        paddingHorizontal: 15,
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courses: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    courseName: {
        paddingVertical: 5,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})