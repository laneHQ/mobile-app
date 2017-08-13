import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class ExploreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Explore</Text>
          </View>
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
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 18,
    paddingRight: 39,
    paddingBottom: 18,
    paddingLeft: 39,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    marginLeft: 15,
    color: '#fff',
  },
  arrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 18,
    paddingRight: 39,
    paddingBottom: 18,
    paddingLeft: 39,
  },
  arrow: {
    fontWeight: "700",
    fontSize: 24,
    color: '#fff',
    marginRight: 15,
    transform: [{rotateZ: '90deg'}],
  },
  cardContainer: {
    flexDirection: 'row',
    paddingBottom: 48,
    paddingTop: 23,
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
