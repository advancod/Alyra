import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class DummyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.goToTab = this.goToTab.bind(this);
  }

  goToTab() {
    this.props.navigation.navigate('Tab2');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

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
}

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

export default withNavigation(DummyComponent);
