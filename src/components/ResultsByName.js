import React from 'react';
import LeftPanelContainer from '../containers/LeftPanelContainer';
import SearchFilterContainer from '../containers/SearchFilterContainer';
class ResultsByName extends React.Component {
  /* istanbul ignore next */
  render() {
    return (
      <div className="wrapper">
        <div>
          <SearchFilterContainer />
        </div>
        <aside className="main_sidebar">
          <LeftPanelContainer />
        </aside>
      </div>
    );
  }
}
export default ResultsByName;
