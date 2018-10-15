import React from 'react';
import LeftPanelContainer from '../containers/LeftPanelContainer';
import SearchFilterContainer from '../containers/SearchFilterContainer';
class ResultsByName extends React.Component {
  /* istanbul ignore next */
  render() {
    return <div className="wrapper">
    <aside className="main_sidebar">
        <LeftPanelContainer/>
    </aside>
    <div>
      <SearchFilterContainer/>
    </div>
</div>
  }
}
export default ResultsByName;
