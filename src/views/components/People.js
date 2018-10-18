import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/lib/Table'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import './../App.css';
import { getPeople } from './../../modules/actions/people'

class People extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  componentWillMount = () => {
    this.props.getPeople()
  }
  render() {
    console.log(this.props.people)
    const { people, loading } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Wars React</h1>
        </header>
        <p className="App-intro">
          <Grid>
            <Row>
              <Col md='12'>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Hair</th>
                      <th>Height</th>
                      <th>Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? 'Loading...' : ''}
                    {people && people.map((peop) => (
                      <tr>
                        <td>{peop.name}</td>
                        <td>{peop.gender}</td>
                        <td>{peop.hair_color}</td>
                        <td>{peop.height}</td>
                        <td><Link to={`/profile/${peop.url.substr(peop.url.lastIndexOf('/') - 1).split('/').shift()}`}>{`${peop.name}'s profile`}</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Grid>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people.value,
    loading: state.people.isRequesting
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPeople
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(People);
