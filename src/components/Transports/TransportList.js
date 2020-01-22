import React from 'react'
import PropTypes from 'prop-types'

const TransportItem = ({ transport, onGotoMap }) => (
  <tr onClick={() => onGotoMap(transport.transportId)}>
    <th scope="row">{transport.transportId.substring(0, 4)}...</th>
    <td>{transport.driverId}</td>
    <td>{transport.vehicleId}</td>
    <td>{transport.duration}</td>
    <td>{transport.distance}</td>
    <td>{transport.passengerName}</td>
    <td>{transport.gender}</td>
    <td>{transport.reason}</td>
    <td>
      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </td>
  </tr>
);

TransportItem.propTypes = {
  transport: PropTypes.object,
  onGotoMap: PropTypes.func
}

const TransportList = ({ transports, onGotoMap }) => (
  <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Driver ID</th>
      <th scope="col">Vehicle ID</th>
      <th scope="col">Duration (s)</th>
      <th scope="col">Distance (m)</th>
      <th scope="col">Passenger</th>
      <th scope="col">Gender</th>
      <th scope="col">Reason</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {transports.map(transport =>
      <TransportItem
        key={transport.transportId}
        onGotoMap={onGotoMap}
        transport={transport} />
    )}
  </tbody>
</table>
);

TransportList.propTypes = {
  transports: PropTypes.array,
  onGotoMap: PropTypes.func
}

export default TransportList;
