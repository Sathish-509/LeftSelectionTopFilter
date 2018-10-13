import React from 'react';
import * as cityActions from './../actions/cityActions';
import * as countryActions from './../actions/countryActions';
import * as dateOfBirthActions from './../actions/dateOfBirthActions';
import * as dateOfDeathActions from './../actions/dateOfDeathActions';
import * as stateActions from './../actions/stateActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftPanel from './../components/leftpanel/LeftPanel';

class LeftPanelContainer extends React.Component {

    getSelectedCountriesList(listOfSelectedCountries) {
        //this.setState({countries: listOfSelectedCountries});
        debugger;
        this.props.actions.updateCountriesList(listOfSelectedCountries);
      };
    
      getSelectedStatesList(listOfSelectedStates) {
        //this.setState({states: listOfSelectedStates});
        debugger;
        this.props.actions.updateStatesList(listOfSelectedStates);
      };
    
      getSelectedCitiesList(listOfSelectedCities) {
        //this.setState({cities: listOfSelectedCities}); 
        this.props.actions.updateCitiesList(listOfSelectedCities);

        debugger;
      };
    
      getSelectedYearOfBirthList(listOfSelectedBirthYears) {
        //this.setState({yearofbirth: listOfSelectedBirthYears});
        debugger;
        this.props.actions.updateDateOfBirthList(listOfSelectedBirthYears);
      };
    
      getSelectedYearOfDeathList(listOfSelectedDeathYears) {
        //this.setState({yearofdeath: listOfSelectedDeathYears});
        debugger;
        this.props.actions.updateDateOfDeathList(listOfSelectedDeathYears);
      };

  render() {
      debugger;
      this.props.listOfSelectedCities;
    return (
      <div>
        {<LeftPanel
            getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
            getSelectedStatesList={this.getSelectedStatesList.bind(this)}
            getSelectedCitiesList={this.getSelectedCitiesList.bind(this)}
            getSelectedYearOfBirthList={this.getSelectedYearOfBirthList.bind(this)}
            getSelectedYearOfDeathList={this.getSelectedYearOfDeathList.bind(this)}
        /> }
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
