import React from 'react';
import * as cityActions from './../actions/cityActions';
import * as countryActions from './../actions/countryActions';
import * as dateOfBirthActions from './../actions/dateofBirthActions';
import * as dateOfDeathActions from './../actions/dateofDeathActions';
import * as stateActions from './../actions/stateActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFiltersList from './../components/toppanel/SearchFiltersList';

class SearchFilterContainer extends React.Component {
  render() {
    return (
      <div>
        {
          <SearchFiltersList
            listOfSelectedCountries={this.props.countryList}
            listOfSelectedCities={this.props.cityList}
            listOfSelectedDateOfBirthList={this.props.dateOfBirthList}
            listOfSelectedDateOfDeathList={this.props.dateOfDeathList}
            listOfSelectedStatesList={this.props.statesList}
            actions={this.props.actions}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    countryList: state.country,
    cityList: state.city,
    dateOfBirthList: state.dateOfBirth,
    dateOfDeathList: state.dateOfDeath,
    statesList: state.state
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
)(SearchFilterContainer);
