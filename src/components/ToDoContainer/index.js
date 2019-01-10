import React, { Component } from "react";
import List from "./List";

class ToDoContainer extends Component {
  render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} 
                placeholder="Todo">
              </input>
              <button type="Add Todo">add</button>
            </form>
          </div>
          <List entries={this.state.items}/>
        </div>
      );
    }
}

export default ToDoContainer;
