import React, { Component } from 'react';

export class Parent extends Component {

  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }

}

export class Child extends Component {

  render() {
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }

}
