import React from 'react';
import { HashRouter } from 'react-router-dom';
import CommonMainContainer, { reduxConnect } from 'common/component/mainContainer';
import PageLogin from './page/login';
import Header from './page/header';

class MainContainer extends CommonMainContainer {
  render() {
    if(localStorage.getItem("_token") || this.props.connected)
      return (
        <HashRouter>
          <div id="mainContainer">
            <Header />
            <div className="clientContainer">						
              <PageLogin />
            </div>
          </div>
        </HashRouter>
      );

    return <PageLogin />;
  }
}

export default reduxConnect(MainContainer);