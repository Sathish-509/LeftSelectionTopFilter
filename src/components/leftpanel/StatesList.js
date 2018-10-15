import React from 'react';
import CheckBoxList from './../Widgets/CheckBoxList/CheckBoxList';

class StatesList extends React.Component {
  /* istanbul ignore next */
  render() {
    return <div>
            <CheckBoxList name={"States"} 
              getSelectedCheckboxesList={this.props.getSelectedStatesList} 
              checkBoxData={this.props.statesListData}
              updatedList={this.props.updatedList}/>
          </div>
  }
}
export default StatesList;
