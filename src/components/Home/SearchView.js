import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  DatePickerIOS
} from 'react-native'

export default class SearchView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      origin: 'Origin',
      destination: 'Destination',
      date: 'Date',
      spots: 'Spots',
      isRide: true,
      isDrive: false
    }

    this._handleRide = this._handleRide.bind(this)
    this._handleDrive = this._handleDrive.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this._handleRide}>
            <Text style={ this.state.isRide ? styles.buttonFocus : styles.buttonBlur}>Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleDrive}>
            <Text style={ this.state.isDrive ? styles.buttonFocus : styles.buttonBlur}>Drive</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(origin) => this.setState({origin})}
            value={this.state.origin}
          />
          <TextInput
            style={styles.input}
            onChangeText={(destination) => this.setState({destination})}
            value={this.state.destination}
          />
          <TextInput
            style={styles.input}
            onChangeText={(date) => this.setState({date})}
            value={this.state.date}
          />
          <TextInput
            style={styles.input}
            onChangeText={(spots) => this.setState({spots})}
            value={this.state.spots}
          />
        </View>
      </View>
    )
  }

  _handleRide() {
    this.setState({ isRide: true, isDrive: false })
  }

  _handleDrive() {
    this.setState({ isRide: false, isDrive: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    flexDirection: 'row'
  },
  buttonFocus: {
    fontSize: 40,
    color: '#6F49FF',
    paddingLeft: 10
  },
  buttonBlur: {
    fontSize: 40,
    color: '#DBDBDB',
    paddingLeft: 10
  },
  input: {
    height: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  }
})
