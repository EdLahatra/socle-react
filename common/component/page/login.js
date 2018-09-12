import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userConnect, userRegister } from '../../actions/user';

//
// Module PageLogin
//

class PageLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      displayRegister: false,
      register: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
      },
    };

    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
    this.tryRegister = this.tryRegister.bind(this);
    this.changeRegisterEmail = this.changeRegisterEmail.bind(this);
    this.changeRegisterPassword = this.changeRegisterPassword.bind(this);
    this.changeRegisterFirstname = this.changeRegisterFirstname.bind(this);
    this.changeRegisterLastname = this.changeRegisterLastname.bind(this);
  }

  changeEmail(email) {
    this.setState({ email });
  }

  changePassword(password) {
    this.setState({ password });
  }

  changeRegisterEmail(email) {
    this.setState({
      register: {
        ...this.state.register,
        email,
      },
    });
  }

  changeRegisterPassword(password) {
    this.setState({
      register: {
        ...this.state.register,
        password,
      },
    });
  }

  changeRegisterFirstname(firstname) {
    this.setState({
      register: {
        ...this.state.register,
        firstname,
      },
    });
  }

  changeRegisterLastname(lastname) {
    this.setState({
      register: {
        ...this.state.register,
        lastname,
      },
    });
  }

  tryLogin() {
    this.props.userConnect({
      email: this.state.email,
      password: this.state.password,
    });
  }

  tryRegister() {
    this.props.userRegister(this.state.register);
  }
}

PageLogin.propTypes = {
  userConnect: PropTypes.func.isRequired,
};

export default PageLogin;

//
// Redux connection
//

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  isFetchingRegister: state.user.isFetchingRegister,
});

const mapDispatchToProps = dispatch => ({
  userConnect: (data) => {
    dispatch(userConnect(data));
  },
  userRegister: (data) => {
    dispatch(userRegister(data));
  },
});

export const reduxConnect = component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);
