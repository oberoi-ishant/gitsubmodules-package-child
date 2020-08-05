import React from 'react';
import TestComponent from './TestComponent';

class AppContainer extends React.Component {

  render () {
    return (
      <div>
        <div>AppContainer</div>
        <TestComponent {...this.props} />
      </div>
    );
  }
}

export default AppContainer;