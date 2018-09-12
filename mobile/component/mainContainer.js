import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommonMainContainer, { reduxConnect } from 'common/component/mainContainer';
import PageLogin from './page/login';
import PagePlaces from './page/places';
import PageDiscussions from './page/discussions';
import PageChat from './page/chat';
import PopupInvite from './popup/invite';
import PopupDownload from './popup/download';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    margin: 10,
    marginTop: 30,
  },
});

class MainContainer extends CommonMainContainer {
  render() {
    if (this.props.connected) {
      let pageToDisplay = <PagePlaces />;
      if (this.props.navigation.discussion !== null) {
        pageToDisplay = <PageChat />;
      } else if (this.props.navigation.folder !== null) {
        pageToDisplay = <PageDiscussions />;
      }

      return (
        <View style={styles.container}>
          <PopupInvite />
          <PopupDownload />
          {pageToDisplay}
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <PageLogin />
      </View>
    );
  }
}

export default reduxConnect(MainContainer);
