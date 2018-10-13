import React from 'react';
import CountriesList from './CountriesList';
import StatesList from './StatesList';
import CitiesList from './CitiesList';
import YearOfBirth from './YearOfBirth';
import YearOfDeath from './YearOfDeath';
import * as countriesListData from './../../data/countries';
import * as statesListData from './../../data/states';
import * as citiesListData from './../../data/cities';
import * as yearOfBirthData from './../../data/yearofbirth';
import * as yearofdeathData from './../../data/yearofdeath';
import SearchFiltersList from './../toppanel/SearchFiltersList';

class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries:[],
      states: [], 
      cities: [],
      yearofbirth: [],
      yearofdeath: []
    }
  }
  getSelectedCountriesList(listOfSelectedCountries) {
    this.setState({countries: listOfSelectedCountries});
    debugger;
  };

  getSelectedStatesList(listOfSelectedStates) {
    this.setState({states: listOfSelectedStates});
    debugger;
  };

  getSelectedCitiesList(listOfSelectedCities) {
    this.setState({cities: listOfSelectedCities});
    debugger;
  };

  getSelectedYearOfBirthList(listOfSelectedBirthYears) {
    this.setState({yearofbirth: listOfSelectedBirthYears});
    debugger;
  };

  getSelectedYearOfDeathList(listOfSelectedDeathYears) {
    this.setState({yearofdeath: listOfSelectedDeathYears});
    debugger;
  };
  
  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
          <div className="field-set">
            <CountriesList getSelectedCountriesList={this.getSelectedCountriesList.bind(this)} countriesListData = {countriesListData.default}/>
          </div>
          <div className="field-set">
            <StatesList getSelectedStatesList={this.getSelectedStatesList.bind(this)} statesListData = {statesListData.default}/>
          </div>
          <div className="field-set">
            <CitiesList getSelectedCitiesList={this.getSelectedCitiesList.bind(this)} citiesListData = {citiesListData.default}/>
          </div>
          <div className="field-set">
            <YearOfBirth getSelectedYearOfBirthList={this.getSelectedYearOfBirthList.bind(this)} yearOfBirthData = {yearOfBirthData.default}/>
          </div>
          <div className="field-set">
            <YearOfDeath getSelectedYearOfDeathList={this.getSelectedYearOfDeathList.bind(this)} yearofdeathData = {yearofdeathData.default}/>
          </div>
        </div>
  }
}
export default LeftPanel;
