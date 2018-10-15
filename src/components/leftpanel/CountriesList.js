import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class CountriesList extends React.Component {

  render() {
    return <div>
            <CheckBoxList name={"Countries"} 
              getSelectedCheckboxesList={this.props.getSelectedCountriesList} 
              checkBoxData={this.props.countriesListData}
              updatedList={this.props.updatedList}
            />
        </div>
  }
}
export default CountriesList;
