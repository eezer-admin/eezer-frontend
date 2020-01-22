import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getTransports, removeTransport } from './../../actions/actions'
import { isLoggedIn } from './../../util/utils'
import TransportList from './TransportList'

class TransportsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  handleOnGotoMap = (transportId) => {
    const { history } = this.props;
    history.push('/routemap/' + transportId);
  }

  componentDidMount() {
    const { transports, getTransports } = this.props;

    if (transports.length === 0) {
      getTransports();
    }
  }

  render() {

    if (!isLoggedIn()) {
      return <Redirect to="/login" />;
    }

    const { transports, loading, deleteTransport } = this.props;

    return (
      <div className='content'>
        <p><span style={ styles.headerText }>Number of transports:</span> {transports.length}</p>

    		{loading.transport ? 'Loading...' :
        <TransportList
          transports={transports}
          onGotoMap={this.handleOnGotoMap} />}
      </div>
    );
  }
}

const styles = {
  headerText: {
    color: '#545454',
    fontWeight: 'bold'
  }
}

const mapStateToProps = state => {

  return {
    transports: state.transports,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteTransport: (id) => dispatch(removeTransport(id)),
    getTransports: () => dispatch(getTransports())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportsTable)
