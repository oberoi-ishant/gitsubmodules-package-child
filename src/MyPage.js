import React from 'react';

class MyPage extends React.Component {
  render () {
    return (
      <div>
        <div>Welcome to MyPage</div>
        <div>Hello Page</div>
        <div>Name: { this.props.name }</div>
      </div>
    );
  }
}

export default MyPage;
