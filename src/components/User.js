import React, { Component } from 'react';

class User extends Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <div>
        <label>role_id: {this.props.role_id}</label><br />
        <label>neme: {this.props.name}</label><br />
        <label>idNUmber: {this.props.idNumber}</label><br />
        <label>email: {this.props.email}</label><br />
        <label>beneficiary: {this.props.beneficiary}</label><br />

      </div>
    );
  }
}
export default User;
