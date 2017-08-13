import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

// MARK: Components
import SearchView from '../components/Home/SearchView'
import ExploreView from '../components/Home/ExploreView'

export default class HomeContainer extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchView />
        <ExploreView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
