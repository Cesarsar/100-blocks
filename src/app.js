import './styles/loading.less';
import './styles/main.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect, Link, browserHistory} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>{'100BLOCKS'}</Link>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li><Link to='/stats'>{'Statistics'}</Link></li>
              <li><Link to='/contacts'>{'Contacts'}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>{'100 blocks this day'}</h1>
        {'Content will be here.'}
      </div>
    );
  }
}

class StatsPage extends Component {
  render() {
    return (
      <div>
        <h1>{'Statistics'}</h1>
        {'Statistics will be here.'}
      </div>
    );
  }
}

class ContactsPage extends Component {
  render() {
    return (
      <div>
        <h1>{'Contacts'}</h1>
        {'Email: juliasaratov@gmail.com.'}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='stats' component={StatsPage} />
      <Route path='contacts' component={ContactsPage} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>,
  document.getElementById('root')
);
