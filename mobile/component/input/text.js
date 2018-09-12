import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import CommonInputText from 'common/component/input/text';

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 6,
    fontSize: 18,
  },
});

class InputText extends CommonInputText {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <TextInput
        style={[styles.input, this.props.style]}
        value={this.props.value}
        onChangeText={this.onChangeText}
      />
    );
  }
}

export default InputText;
