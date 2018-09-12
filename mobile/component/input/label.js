import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CommonInputText from 'common/component/input/text';

const styles = StyleSheet.create({
  label: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 18,
  },
});

class Label extends CommonInputText {
  render() {
    return (
      <Text style={[styles.label, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default Label;
