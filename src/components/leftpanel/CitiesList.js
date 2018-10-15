import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class CitiesList extends React.Component {
  /* istanbul ignore next */
  render() {
    return <div>
            <CheckBoxList name={"Cities"} 
              getSelectedCheckboxesList={this.props.getSelectedCitiesList} 
              checkBoxData={this.props.citiesListData}
              updatedList={this.props.updatedList}/>
          </div>
  }
}
export default CitiesList;
