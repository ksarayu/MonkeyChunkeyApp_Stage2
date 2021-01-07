import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import db from './localdb';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      enteredText : '',
      displayEnteredText : '',
      chunks : []
    }
  }

  render() {
    return (
      <View>
        <Header
          centerComponent = {{text : 'Monkey Chunkey App!', style : {color : 'white'}}}
          backgroundColor = 'cadetblue'>
        </Header>

        <Image
        style = {styling.imageStyle}
        source = {{uri : "https://free.clipartof.com/76-Free-Cute-Cartoon-Monkey-Clipart-Illustration.jpg"}}>
        </Image>

        <TextInput
        value = {this.state.enteredText}
        onChangeText = {(text) => {
          this.setState({
            enteredText : text
          })
        }}>
        </TextInput>

        <Button
        title = 'Go'
        onPress = {() => {
          this.setState({
            displayEnteredText : this.state.enteredText,
            chunks : db[this.state.enteredText].chunks
          })
        }}>  
        </Button>

        {this.state.chunks.map((item) =>{
          return(
            <TouchableOpacity>
              <Text> {item} </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const styling = StyleSheet.create({
  imageStyle : {
    width : 75,
    height : 100
  }
})
