import React, { Component } from 'react'
import { connect } from 'react-redux'
class Users extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        <h1>Users!</h1>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.username}</li>
          ))}
        </ul>
        Total Users: {users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users }
}
export default connect(mapStateToProps)(Users)
