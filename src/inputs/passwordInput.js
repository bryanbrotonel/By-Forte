import React, {Component} from 'react';

export class PasswordInput extends Component {
  render() {
    return (
      <React.Fragment>
      <input className="form-control" type="password" name="password" value={this.state.value} onChange={this.handleChange}/>
    </React.Fragment>
  )
  }
}
