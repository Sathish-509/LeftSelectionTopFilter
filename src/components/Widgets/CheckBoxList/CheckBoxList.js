import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class CheckBoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCheckboxes: []}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedCheckboxes: nextProps.updatedList});
  }
  /* istanbul ignore next */
  onCheckboxListChange(listofCheckedBoxes) {
    this.setState({selectedCheckboxes: listofCheckedBoxes});
    this.props.getSelectedCheckboxesList(listofCheckedBoxes);
  }

  render() {
    let checkBoxList = this.props.checkBoxData.map((obj, index) => {
      return <label key={index.toString()+this.props.name}><Checkbox value={obj.keyName}/> {obj.displayName} </label>
    });
    return <div>
          <CheckboxGroup name={this.props.name} value={this.state.selectedCheckboxes} 
            onChange={this.onCheckboxListChange.bind(this)}
            checkboxDepth={3}
            >
                {checkBoxList}
          </CheckboxGroup>
        </div>
  }
}
export default CheckBoxList;
