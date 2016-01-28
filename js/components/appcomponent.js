import React, { Component } from 'react';

var Item = function(meta) {
  return (
    <li onClick={() => meta.delete(meta.data.id)}>{meta.data.text}</li>
  );
}

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      items: props.items
    }
  }
  getItems() {
    return this.state.items.map((item, index) =>
      <Item key={index} data={item} delete={this._deleteItem.bind(this)} />
    );
  }
  render() {
    var items = this.getItems();
    return (
      <ul>
        {items}
      </ul>
    );
  }
  _deleteItem(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }
}
