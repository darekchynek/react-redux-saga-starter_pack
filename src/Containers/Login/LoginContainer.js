import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

class LoginContainer extends Component {

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRequestStart: () => dispatch(actions.enableLoading()),
  onRequestEnds: () => dispatch(actions.disableLoading()),
  onError: error => dispatch(actions.setError(error))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
