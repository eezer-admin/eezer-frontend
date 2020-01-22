import React from 'react'
import { connect } from 'react-redux'
import { getVehicles } from '../actions/actions'

const VehicleItem = (props) => (
  <div style={{ display: 'inline-block' }}>
    <span style={styles.boxes}>{props.header}</span>
    <span style={{ width: '20px', display: 'inline-block' }}></span>
    <span style={{ width: '200px', display: 'inline-block' }}>{props.data}</span>
  </div>
);

const Vehicle = (props) => (
  <li key={props.vehicle.vehicleId} className='li-transport'>
    <ul className='ul-transport'>
      <li>
        <VehicleItem header={'Vehicle ID:'} data={props.vehicle.vehicleId} />
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <VehicleItem header={'Real name:'} data={props.user.realName} />
      </li>
      <li>
        <VehicleItem header={'Location:'} data={props.user.location} />
      </li>
      <li>
        <VehicleItem header={'Role:'} data={props.user.role} />
      </li>
      <li>
        <VehicleItem header={'Created:'} data={props.user.createdTime} />
      </li>
    </ul>
  </li>
);

const Vehicles = ({ vehicles, loading }) => (
  <div className='content'>

    <p><span style={ styles.headerText }>Number of vehicles:</span> {vehicles.length}</p>

    <ul>
      {loading.vehicles ? 'Loading...':
      vehicles.map(vehicle =>
        <Vehicle key={vehicle.vehicleId} vehicle={vehicle} />
      )}
    </ul>
  </div>
)

const mapStateToProps = state => {
  return {
    vehicles : state.vehicles,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return {

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
)(Vehicles)
