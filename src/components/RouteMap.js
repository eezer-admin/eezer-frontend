import React from 'react'
import { connect } from 'react-redux'
import OLMap from './OLMap'
import { getTransportCoords } from '../actions/actions'

const RouteMap = ({ id, coords, loading, transportCoords, getCoords }) => (
  <div className='content'>
    { loading.coords ? 'Loading map...' : <OLMap coords={transportCoords}/> }

    <div className="jumbotron">
      <p>Transport ID: {id}</p>
      <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
      &nbsp;&nbsp;
      <a href='' onClick={getCoords}>Refresh coordinates</a>
    </div>

  </div>
)

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  let tc = [];
  if (state.transportCoords !== undefined) {
    tc = state.transportCoords.map(
      it => [ it.lng, it.lat ]
    );
  }

  return {
    id,
    transportCoords: tc,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, props) => {
  dispatch(getTransportCoords(props.match.params.id));

  return {
    getCoords: () => dispatch(getTransportCoords(props.match.params.id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteMap)
