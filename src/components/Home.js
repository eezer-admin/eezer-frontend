import React from 'react'
import { connect } from 'react-redux'

const Home = ({ text }) => (
  <div className='content'>

    <div className="jumbotron">
      <h1 className="display-4">Hello, Eezer!</h1>
      <p className="lead">This is the new back office tool for the Eezer track recorder unit. Navigate using the links at the top of the page. You will be aseked to login, if not already.</p>
      <hr className="my-4" />
      <p>Feel free to check out all the new features and stuff that is coming...</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="" role="button">Learn more</a>
      </p>
    </div>

  </div>
)

const mapStateToProps = state => {
  return {
    text : state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
