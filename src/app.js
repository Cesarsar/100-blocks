import './styles/layout.less';
import './styles/main.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <h1>{'Welcome to 100 blocks!'}</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);