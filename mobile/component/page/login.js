import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import CommonPageLogin, { reduxConnect } from 'common/component/page/login';
import InputText from '../input/text';
import InputPassword from '../input/password';
import Label from '../input/label';

const LoginButton = (props) => {
  if (props.isFetching) {
    return (<Text>Connecting ...</Text>);
  }

  return (
    <TouchableOpacity
      onPress={props.onClick}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#3697FF',
          padding: 20,
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 8,
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>Connect</Text>
      </View>
    </TouchableOpacity>
  );
};

LoginButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const RegisterButton = (props) => {
  if (props.isFetching) {
    return (<Text>Sign up ...</Text>);
  }

  return (
    <TouchableOpacity
      onPress={props.onClick}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#3697FF',
          padding: 20,
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 8,
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>Sign up!</Text>
      </View>
    </TouchableOpacity>
  );
};

RegisterButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

class PageLogin extends CommonPageLogin {
  render() {
    if (this.state.displayRegister) {
      return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Email</Label>
            <InputText
              style={{ flex: 1 }}
              value={this.state.register.email}
              onChange={this.changeRegisterEmail}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Password</Label>
            <InputPassword
              style={{ flex: 1 }}
              value={this.state.register.password}
              onChange={this.changeRegisterPassword}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Firstname</Label>
            <InputText
              style={{ flex: 1 }}
              value={this.state.register.firstname}
              onChange={this.changeRegisterFirstname}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Lastname</Label>
            <InputText
              style={{ flex: 1 }}
              value={this.state.register.lastname}
              onChange={this.changeRegisterLastname}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Skype</Label>
            <InputText
              style={{ flex: 1 }}
              value={this.state.register.skype}
              onChange={this.changeRegisterSkype}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Label style={{ flex: 1 }}>Timezone</Label>
            <InputText
              style={{ flex: 1 }}
              value={this.state.register.timezone}
              onChange={this.changeRegisterTimezone}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={this.toggleRegister}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#eee',
                  padding: 20,
                  marginTop: 20,
                  marginRight: 40,
                  alignSelf: 'center',
                  borderRadius: 8,
                  justifyContent: 'center',
                }}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
            <RegisterButton isFetching={this.props.isFetchingRegister} onClick={this.tryRegister} />
          </View>
        </View>
      );
    }

    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Label style={{ flex: 1 }}>Email</Label>
          <InputText
            style={{ flex: 1 }}
            value={this.state.email}
            onChange={this.changeEmail}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Label style={{ flex: 1 }}>Password</Label>
          <InputText
            style={{ flex: 1 }}
            value={this.state.password}
            onChange={this.changePassword}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={this.toggleRegister}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: '#eee',
                padding: 20,
                marginTop: 20,
                marginRight: 40,
                alignSelf: 'center',
                borderRadius: 8,
                justifyContent: 'center',
              }}
            >
              <Text>Sign up</Text>
            </View>
          </TouchableOpacity>
          <LoginButton isFetching={this.props.isFetching} onClick={this.tryLogin} />
        </View>
      </View>
    );
  }
}

export default reduxConnect(PageLogin);
