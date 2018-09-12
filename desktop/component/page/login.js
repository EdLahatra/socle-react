import React from 'react';
import PropTypes from 'prop-types';
import CommonPageLogin, { reduxConnect } from 'common/component/page/login';
import InputText from '../input/text';
import InputPassword from '../input/password';

const LoginButton = (props) => {
  if (props.isFetching) {
    return (<span>Connecting ...</span>);
  }

  return (<button onClick={props.onClick}>Connect</button>);
};

LoginButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const RegisterButton = (props) => {
  if (props.isFetching) {
    return (<span>Sign up ...</span>);
  }

  return (<button onClick={props.onClick}>Sign up!</button>);
};

RegisterButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

class PageLogin extends CommonPageLogin {
  render() {
    if (this.state.displayRegister) {
      return (
        <div id="login">
          <h3>Register</h3>
          <div>
            Email
            <InputText
              value={this.state.register.email}
              onChange={this.changeRegisterEmail}
            />
          </div>
          <div>
            Password
            <InputPassword
              value={this.state.register.password}
              onChange={this.changeRegisterPassword}
            />
          </div>
          <div>
            Firstname
            <InputText
              value={this.state.register.firstname}
              onChange={this.changeRegisterFirstname}
            />
          </div>
          <div>
            Lastname
            <InputText
              value={this.state.register.lastname}
              onChange={this.changeRegisterLastname}
            />
          </div>
          <div>
            <button onClick={this.toggleRegister}>Cancel</button>
            <RegisterButton isFetching={this.props.isFetchingRegister} onClick={this.tryRegister} />
          </div>
        </div>
      );
    }

    return (
      <div id="login">
        <h3 className="title-l">Login</h3>
        <form action="" className="test">
          <label>
            Email
            <InputText value={this.state.email} onChange={this.changeEmail} />
          </label>

          <label>
            Password
            <InputText value={this.state.password} onChange={this.changePassword} />
          </label>

          <label>
            <LoginButton isFetching={this.props.isFetching} onClick={this.tryLogin} />
          </label>
        </form>
      </div>
    );
  }
}

export default reduxConnect(PageLogin);
