import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/actions'
import UserList from './UserList'

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = { }
  }

  componentDidMount() {
    const { users, getUsers } = this.props;

    if (users.length === 0) {
      getUsers();
    }
  }

  render() {

    const { users, loading } = this.props;

    return (
      <div className='content'>

        <p><span style={ styles.headerText }>Number of users:</span> {users.length}</p>

        {loading.users ? 'Loading...' :
        <UserList
          users={users} />}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    users : state.users,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return {
    getUsers: () => dispatch(getUsers())
  }
}

const styles = {
    boxes: {
      width: '150px',
      display: 'inline-block',
      color: '#545454',
      fontWeight: 'bold',
      textAlign: 'right'
    },
    headerText: {
      color: '#545454',
      fontWeight: 'bold'
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
