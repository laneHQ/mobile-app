import React from 'react'
import { StyleSheet, View } from 'react-native'

// MARK: Components
import SearchView from '../components/Home/SearchView'
import ExploreView from '../components/Home/ExploreView'

export default class HomeContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchView />
        <ExploreView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
