import React, { Component } from "react";
import {connect} from "react-redux"

class AddPizza extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
   
  onChange(e) {
    console.log(e)
    this.setState ( { [e.target.name]: e.target.value });
    console.log(this.state)
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(this.state.name);
    const {pizza} = this.state;
    console.log(pizza);
   this.props.dispatch({type:'ADD_PIZZA',payload:{name:pizza}})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Add Pizza:</label>
          <br />
          <input
            type="text"
            name="pizza"
            value={this.state.pizza}
            onChange={this.onChange}
          />

          <input type="submit" value="Add Pizza" />
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null)(AddPizza);
