import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class CountriesList extends React.Component {

  render() {
    debugger;
    return <div>
            <CheckBoxList name={"Countries"} 
            getSelectedCheckboxesList={this.props.getSelectedCountriesList} 
            checkBoxData = {this.props.countriesListData}/>
        </div>
  }
}
export default CountriesList;
