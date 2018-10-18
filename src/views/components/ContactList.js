import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getContact} from './../../modules/actions/contact'

class ContactList extends Component {
  componentWillMount() {
    this.props.getContact()
  }
  render() {
    const { contacts } = this.props
    console.log(contacts)
    return(
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Contact List
            </Typography>
          </Toolbar>
        </AppBar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Photo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              contacts && contacts.map(contact =>
                <TableRow hover="true"
                  onClick={() => this.props.history.push(`/contact/${contact.id}`)}
                >
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.age}</TableCell>
                  <TableCell>{contact.photo}</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts,
    loading: state.contact.isRequesting
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContact
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
