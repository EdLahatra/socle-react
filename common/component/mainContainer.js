import { Component } from 'react';
import { connect } from 'react-redux';

//
// Module MainContainer
//

class MainContainer extends Component {
}

export default MainContainer;

//
// Redux connection
//

const mapStateToProps = state => ({
  connected: state.user.connected,
  navigation: state.navigation,
});

export const reduxConnect = component => connect(
  mapStateToProps,
)(component);
