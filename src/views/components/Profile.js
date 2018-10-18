import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import './../App.css';
import { getProfile } from './../../modules/actions/profile'

class Profile extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentWillMount = () => {
    const {id} = this.props.match.params
    const { url } = this.props
    this.props.getProfile(id)
  }

  render() {
    const { profile, loading } = this.props
    console.log(profile)
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>People</Link>
          <h1 className="App-title">Profile</h1>
        </header>
        <p className="App-intro">
          {loading ? 'Loading...' : ''}
          <p>{profile && profile.name}</p>
          <p>{profile && profile.height}</p>
          <p>{profile && profile.hair_color}</p>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.value,
    loading: state.profile.isRequesting
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProfile
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
