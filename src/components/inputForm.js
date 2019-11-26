import React from "react"

export default class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  value: ``, 
                  finalValue: ``,
                  job_value: ``,
                }            
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(section, event) {
    this.setState({value: event.target.value}); 
    console.log(section);
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
          <input type="text" onChange={(e) => this.handleChange("tag", e)}/>
        </label>
        <input type="submit" value="Submit" />
        <p>Name: {this.state.finalValue}</p>
      </form>
    )
  }
}