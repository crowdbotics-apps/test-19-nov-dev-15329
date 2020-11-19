import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_3: "", TextInput_5: "", TextInput_6: "" }

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Button
        title="Press me!"
        style={styles.Button_4}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  TextInput_3: {},
  Button_4: {},
  TextInput_5: {},
  TextInput_6: {},
  View_1: {},
  Text_2: {
    width: "100%",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    textAlign: "right"
  },
  TextInput_3: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  Button_4: {
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4
  },
  TextInput_5: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    textAlign: "right"
  },
  TextInput_6: {
    height: 100,
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    textAlign: "center"
  }
})
