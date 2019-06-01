import React, { Component } from 'react'
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class Withdraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getGains: 0,
      getNbGagnants: 0
    };

    this.goToTab = this.goToTab.bind(this);
  }

  goToTab() {
    this.props.navigation.navigate('admin');
  }



  render() {

    return (


            <View style={styles.container}>
            <TextInput
                      style={{height: 40}}
                      placeholder="Type here to translate!"
                      onChangeText={(x) => this.setState({x})}
                    />
            <Text style={styles.text}>{this.props.text1}</Text>
            <Text>{this.props.text2}</Text>
<Text>{this.props.text3}</Text>

<Text>{this.state.getNbGagnants}</Text>
<Text>{this.state.getGains}</Text>

<View style={styles.buttonContainer}>
  <Button
    onPress={this.goToTab}
    color={'#242134'}
    title="Change tab!"
  />
</View>
            </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonContainer: {
    padding: 15,
  },
});

export default withNavigation(Withdraw);
