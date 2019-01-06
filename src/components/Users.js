import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    // console.log("USERS", this.props); {users: Array(0), numOfUsers: 0, dispatch: ƒ}
    const users = this.props.users.map((u) => {
      return <li key={u.username}>{u.username}</li>
    })

    return (
      <div>
        {this.props.numOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log(state);
  // debugger
  return {
    users: state.users,
    numOfUsers: state.users.length
   }
}

export default connect(mapStateToProps)(Users);
