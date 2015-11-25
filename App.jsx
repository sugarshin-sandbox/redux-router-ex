import React, { Component } from 'react';
import { Link } from 'react-router';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';

// @connect(state => ({ routerState: state.router }), { pushState })
class App extends Component {

  render() {
    return (
      <div>
        <h1>App Container</h1>
        {this.renderLinks()}
        {this.props.children}
      </div>
    );
  }

  renderLinks() {
    return [
      '/',
      '/parent?foo=bar',
      '/parent/child?bar=baz',
      '/parent/child/123?baz=foo'
    ].map(link => (
      <div key={`link:${Date.now() * Math.random()}`}>
        <Link to={link}>{link}</Link>
      </div>
    ));
  }

}

export default connect(state => ({ routerState: state.router }), { pushState })(App);
