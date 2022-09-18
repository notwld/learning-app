import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Progress() {
  return (
    <View style={{ paddingVertical: 5 }}>
      <View>
        <Text style={styles.courseText}>Web Development</Text>
        <View
          style={{
            width: "90%",
            height: 5,
            backgroundColor: "white",
            borderRadius: 100,
            marginVertical: 4,
          }}
        >
          <View
            style={{
              width: 90,
              height: 5,
              borderRadius: 50,
              backgroundColor: "blue",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></View>
        </View>
      </View>
      <View>
        <Text style={styles.courseText}>React Native</Text>
        <View
          style={{
            width: "90%",
            height: 5,
            backgroundColor: "white",
            borderRadius: 100,
            marginVertical: 4,
          }}
        >
          <View
            style={{
              width: 50,
              height: 5,
              borderRadius: 50,
              backgroundColor: "blue",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></View>
        </View>
      </View>
      <View>
        <Text style={styles.courseText}>UX/UI</Text>
        <View
          style={{
            width: "90%",
            height: 5,
            backgroundColor: "white",
            borderRadius: 100,
            marginVertical: 4,
          }}
        >
          <View
            style={{
              width: "90%",
              height: 5,
              borderRadius: 50,
              backgroundColor: "blue",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseText: {
    color: "white",
  },
});
