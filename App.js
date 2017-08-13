import React from 'react'
import { StyleSheet, View, StatusBar, NavigatorIOS } from 'react-native'

// MARK: Components
import HomeContainer from './src/containers/HomeContainer.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
        />
        <NavigatorIOS
          initialRoute={{
            component: HomeContainer,
            title: 'Home',
          }}
          navigationBarHidden={true}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
})
