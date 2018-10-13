import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class YearOfBirth extends React.Component {
  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
            <CheckBoxList name={"Cities"} 
              getSelectedCheckboxesList={this.props.getSelectedYearOfBirthList} 
              checkBoxData={this.props.yearOfBirthData}/>
          </div>
  }
}
export default YearOfBirth;
