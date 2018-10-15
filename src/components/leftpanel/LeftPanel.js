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
    return <div>
          <div className="field-set">
            <CountriesList getSelectedCountriesList={this.props.getSelectedCountriesList} countriesListData = {countriesListData.default} 
              updatedList={this.props.updatedlistOfSelectedCountries} />
          </div>
          <div className="field-set">
            <CitiesList getSelectedCitiesList={this.props.getSelectedCitiesList} citiesListData = {citiesListData.default}
              updatedList={this.props.updatedlistOfSelectedCities} />
          </div>
          <div className="field-set">
            <YearOfBirth getSelectedYearOfBirthList={this.props.getSelectedYearOfBirthList} yearOfBirthData = {yearOfBirthData.default}
              updatedList={this.props.updatedlistOfSelectedDateOfBirth} />
          </div>
          <div className="field-set">
            <YearOfDeath getSelectedYearOfDeathList={this.props.getSelectedYearOfDeathList} yearofdeathData = {yearofdeathData.default}
              updatedList={this.props.updatedlistOfSelectedDateOfDeath}/>
          </div>
          <div className="field-set">
            <StatesList getSelectedStatesList={this.props.getSelectedStatesList} statesListData = {statesListData.default}
              updatedList={this.props.updatedlistOfSelectedStates} />
          </div>
        </div>
  }
}
export default LeftPanel;
