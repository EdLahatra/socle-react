import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import CommonInputPassword from 'common/component/input/password';

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 6,
    fontSize: 18,
  },
});

class InputText extends CommonInputPassword {
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
