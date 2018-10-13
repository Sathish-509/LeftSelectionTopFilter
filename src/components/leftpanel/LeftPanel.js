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

  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
          <div className="field-set">
            <CountriesList getSelectedCountriesList={this.props.getSelectedCountriesList} countriesListData = {countriesListData.default}/>
          </div>
          <div className="field-set">
            <StatesList getSelectedStatesList={this.props.getSelectedStatesList} statesListData = {statesListData.default}/>
          </div>
          <div className="field-set">
            <CitiesList getSelectedCitiesList={this.props.getSelectedCitiesList} citiesListData = {citiesListData.default}/>
          </div>
          <div className="field-set">
            <YearOfBirth getSelectedYearOfBirthList={this.props.getSelectedYearOfBirthList} yearOfBirthData = {yearOfBirthData.default}/>
          </div>
          <div className="field-set">
            <YearOfDeath getSelectedYearOfDeathList={this.props.getSelectedYearOfDeathList} yearofdeathData = {yearofdeathData.default}/>
          </div>
        </div>
  }
}
export default LeftPanel;
