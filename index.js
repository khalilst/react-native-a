import React, { Component } from 'react';
import { StyleSheet, Text, Linking } from 'react-native';

export default class A extends Component {
  render() {
    const {children, style, href} = this.props;
    let _style = Object.assign({}, styles.default, style);
    let _url = href ? href : children;
    _url = _url.toLowerCase();
    _url = _url.indexOf('http') === -1 ? `http://${_url}` : _url;
    return (
      <Text
        style={ _style }
        onPress={() => Linking.openURL(_url) }
      >
        { children }
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: '#3490dc'
  }
});