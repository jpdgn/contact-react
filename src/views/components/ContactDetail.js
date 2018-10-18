import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

import { getContactById } from '../../modules/actions/contact'

class ContactDetail extends Component {
  componentWillMount() {
    const contactId = this.props.match.params.id
    this.props.getContactById(contactId)
  }
  render() {
    const { contact } = this.props
    return(
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Contact Detail
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <p>{contact && contact.id}</p>
          <p>{contact && contact.firstName}</p>
          <p>{contact && contact.lastName}</p>
          <p>{contact && contact.age}</p>
          <p>{contact && contact.photo}</p>
        </Card>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contact: state.contact.contact,
    loading: state.contact.isRequesting
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContactById
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
