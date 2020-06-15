import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = () => {
    //your code here
  }
  editItem = () => {
    const newLocation = prompt('enter the new location')
    this.props.store.editItem(this.props.item.name, newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          value={item.name} />
        {item.name}   is in   {item.location}
        <button className='editButton' onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default Item