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
    this.props.actions.updateCountriesList(listOfSelectedCountries);
  }

  getSelectedStatesList(listOfSelectedStates) {
    this.props.actions.updateStatesList(listOfSelectedStates);
  }

  getSelectedCitiesList(listOfSelectedCities) {
    this.props.actions.updateCitiesList(listOfSelectedCities);
  }

  getSelectedYearOfBirthList(listOfSelectedBirthYears) {
    this.props.actions.updateDateOfBirthList(listOfSelectedBirthYears);
  }

  getSelectedYearOfDeathList(listOfSelectedDeathYears) {
    this.props.actions.updateDateOfDeathList(listOfSelectedDeathYears);
  }

  render() {
    return (
      <div>
        {
          <LeftPanel
            getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
            getSelectedStatesList={this.getSelectedStatesList.bind(this)}
            getSelectedCitiesList={this.getSelectedCitiesList.bind(this)}
            getSelectedYearOfBirthList={this.getSelectedYearOfBirthList.bind(
              this
            )}
            getSelectedYearOfDeathList={this.getSelectedYearOfDeathList.bind(
              this
            )}
            updatedlistOfSelectedCountries={this.props.listOfSelectedCountries}
            updatedlistOfSelectedCities={this.props.listOfSelectedCities}
            updatedlistOfSelectedDateOfBirth={
              this.props.listOfSelectedDateOfBirth
            }
            updatedlistOfSelectedDateOfDeath={
              this.props.listOfSelectedDateOfDeath
            }
            updatedlistOfSelectedStates={this.props.listOfSelectedStates}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfSelectedCountries: state.country,
    listOfSelectedCities: state.city,
    listOfSelectedDateOfBirth: state.dateOfBirth,
    listOfSelectedDateOfDeath: state.dateOfDeath,
    listOfSelectedStates: state.state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...cityActions,
        ...countryActions,
        ...dateOfBirthActions,
        ...dateOfDeathActions,
        ...stateActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanelContainer);
