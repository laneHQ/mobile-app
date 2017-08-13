import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ExploreView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Explore</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>></Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
          </View>
        </View>
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
    padding: 15,
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
    padding: 15,
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
  },
  card: {
    height: 230,
    width: 175,
    backgroundColor: '#fff',
  },
});
