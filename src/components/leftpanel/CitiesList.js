import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class CitiesList extends React.Component {
  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
            <CheckBoxList name={"Cities"} 
              getSelectedCheckboxesList={this.props.getSelectedCitiesList} 
              checkBoxData={this.props.citiesListData}/>
          </div>
  }
}
export default CitiesList;
