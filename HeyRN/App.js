import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
      Hello World 1!
      </Text>
      <Text style={styles.welcome}>
      Hello World 2!
      </Text>
      <Text style={styles.welcome}>
      Hello World 3!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcome: {
    backgroundColor: 'rosybrown',
    fontSize: 20,
  },
});
