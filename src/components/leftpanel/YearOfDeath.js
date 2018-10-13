import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class YearOfDeath extends React.Component {
  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
            <CheckBoxList name={"YearOfDeath"} 
              getSelectedCheckboxesList={this.props.getSelectedYearOfDeathList} 
              checkBoxData={this.props.yearofdeathData}/>
          </div>
  }
}
export default YearOfDeath;
