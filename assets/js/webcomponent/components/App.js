import React from 'react';
import { hot } from 'react-hot-loader/root';

import ConnectedAppLayout from '../containers/AppLayout';

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <ConnectedAppLayout />
      </div>
    );
  }
}

App.propTypes = {
};

export default hot(App);
