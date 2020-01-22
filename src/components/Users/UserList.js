import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user }) => (
  <tr>
    <th scope="row">{user.username}</th>
    <td>{user.realName}</td>
    <td>{user.role}</td>
    <td>{user.organization}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.other}</td>
    <td>
      <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </td>
  </tr>
);

UserItem.propTypes = {
  user: PropTypes.object
}

const UserList = ({ users }) => (
  <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Real name</th>
      <th scope="col">Role</th>
      <th scope="col">Organization</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Other</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user =>
      <UserItem
        key={user.username}
        user={user} />
    )}
  </tbody>
</table>
);

UserList.propTypes = {
  transports: PropTypes.array
}

export default UserList;
