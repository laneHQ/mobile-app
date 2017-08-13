import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class ExploreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Explore</Text>
        </View>
        <ScrollView style={styles.cardContainer} horizontal={true}>
          <View style={styles.card}>
          </View>
          <View style={styles.card}>
          </View>
          <View style={styles.card}>
          </View>
          <View style={styles.card}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6F49FF',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingRight: 39,
    paddingBottom: 0,
    paddingLeft: 39,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    paddingBottom: 48,
    paddingTop: 38,
  },
  card: {
    height: 300,
    width: 254,
    backgroundColor: '#fff',
    marginLeft: 20,
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 4 },
  },
});
