import React from 'react';
import * as cityActions from './../../actions/cityActions';
import * as countryActions from './../../actions/countryActions';
import * as dateOfBirthActions from './../../actions/dateOfBirthActions';
import * as dateOfDeathActions from './../../actions/dateOfDeathActions';
import * as stateActions from './../../actions/stateActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LeftPanelContainer extends React.Component {

  render() {
      debugger;
      this.props.listOfSelectedCities;
    return (
      <div>
        {}
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    debugger;
  return {
    listOfSelectedCities: state.cities,
    listOfSelectedCountries: state.countries,
    listOfSelectedDateOfBirth: state.dateofbirth,
    listOfSelectedDateOfDeath: state.dateofdeath,
    listOfSelectedStates: state.states
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...cityActions, ...countryActions, ...dateOfBirthActions,
    ...dateOfDeathActions, ...stateActions },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanelContainer);
