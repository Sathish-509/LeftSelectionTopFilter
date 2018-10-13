import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class StatesList extends React.Component {
  /* istanbul ignore next */
  render() {
    debugger;
    return <div>
            <CheckBoxList name={"States"} 
              getSelectedCheckboxesList={this.props.getSelectedStatesList} 
              checkBoxData={this.props.statesListData}/>
          </div>
  }
}
export default StatesList;
