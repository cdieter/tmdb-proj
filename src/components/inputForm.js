import React from "react"

export default class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ``, finalValue: ``};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({finalValue: this.state.value});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{padding: `0 1rem` }}>
          <h3>Name:</h3>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label style={{padding: `0 1rem` }}>
          <h3>Job:</h3>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        <p>Name: {this.state.finalValue}</p>
      </form>
    )
  }
}