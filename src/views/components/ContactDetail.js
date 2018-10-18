import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import {getContactById} from '../../modules/actions/contact'

class ContactDetail extends Component {
  componentWillMount() {
    console.log(this.props.params);
    this.props.getContactById('b3abd640-c92b-11e8-b02f-cbfa15db428b')
  }
  render() {
    const { contact } = this.props
    console.log(contact)
    return(
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Contact List
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contact: state.contact,
    loading: state.contact.isRequesting
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContactById
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
