import React from 'react';
import TagsInput from 'react-tagsinput';

class SearchFiltersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [],
      countryList: [],
      cityList: [],
      dateOfBirthList: [],
      dateOfDeathList: [],
      stateList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.listOfSelectedCountries) !==
      JSON.stringify(nextProps.listOfSelectedCountries)
    ) {
     if ( this.state.countryList.length < nextProps.listOfSelectedCountries.length) {
        this.updateFilterList(nextProps.listOfSelectedCountries, 'country');
     } else {
        let optionstoremove = this.state.countryList.filter((item) => {
           return nextProps.listOfSelectedCountries.indexOf(item) === -1 ? item : null
          });
        let tempList = Object.assign([], this.state.filterList);
        tempList.splice(tempList.indexOf("country:"+optionstoremove[0]), 1);
        this.setState({filterList: tempList});
      }
      this.setState({ countryList: nextProps.listOfSelectedCountries });
    }

    if (
      JSON.stringify(this.props.listOfSelectedCities) !==
      JSON.stringify(nextProps.listOfSelectedCities)
    ) {
      if( this.state.cityList.length < nextProps.listOfSelectedCities.length ) {
        this.updateFilterList(nextProps.listOfSelectedCities, 'city');
      } else {
        let optionstoremove = this.state.cityList.filter((item) => {
          return nextProps.listOfSelectedCities.indexOf(item) === -1 ? item : null
         });
       let tempList = Object.assign([], this.state.filterList);
       tempList.splice(tempList.indexOf("city:"+optionstoremove[0]), 1);
       this.setState({filterList: tempList});
      }
      this.setState({ cityList: nextProps.listOfSelectedCities });
    }

    if (
      JSON.stringify(this.props.listOfSelectedDateOfBirthList) !==
      JSON.stringify(nextProps.listOfSelectedDateOfBirthList)
    ) {
      if ( this.state.dateOfBirthList.length < nextProps.listOfSelectedDateOfBirthList.length ) {
        this.updateFilterList(
          nextProps.listOfSelectedDateOfBirthList,
          'dateofbirth'
        );
      } else {
        let optionstoremove = this.state.dateOfBirthList.filter((item) => {
          return nextProps.listOfSelectedDateOfBirthList.indexOf(item) === -1 ? item : null
         });
       let tempList = Object.assign([], this.state.filterList);
       tempList.splice(tempList.indexOf("dateofbirth:"+optionstoremove[0]), 1);
       this.setState({filterList: tempList});
      }
      this.setState({
        dateOfBirthList: nextProps.listOfSelectedDateOfBirthList
      });
    }

    if (
      JSON.stringify(this.props.listOfSelectedDateOfDeathList) !==
      JSON.stringify(nextProps.listOfSelectedDateOfDeathList)
    ) {
      if ( this.state.dateOfDeathList.length < nextProps.listOfSelectedDateOfDeathList.length ) {
        this.updateFilterList(
          nextProps.listOfSelectedDateOfDeathList,
          'dateofdeath'
        );
      } else {
        let optionstoremove = this.state.dateOfDeathList.filter((item) => {
          return nextProps.listOfSelectedDateOfDeathList.indexOf(item) === -1 ? item : null
         });
       let tempList = Object.assign([], this.state.filterList);
       tempList.splice(tempList.indexOf("dateofdeath:"+optionstoremove[0]), 1);
       this.setState({filterList: tempList});
      }
      this.setState({
        dateOfDeathList: nextProps.listOfSelectedDateOfDeathList
      });
    }

    if (
      JSON.stringify(this.props.listOfSelectedStatesList) !==
      JSON.stringify(nextProps.listOfSelectedStatesList)
    ) {
      if ( this.state.stateList.length < nextProps.listOfSelectedStatesList.length ) {
        this.updateFilterList(nextProps.listOfSelectedStatesList, 'state');
      } else {
       let optionstoremove = this.state.stateList.filter((item) => {
          return nextProps.listOfSelectedStatesList.indexOf(item) === -1 ? item : null
        });
       let tempList = Object.assign([], this.state.filterList);
       tempList.splice(tempList.indexOf("state:"+optionstoremove[0]), 1);
       this.setState({filterList: tempList});
      }
      this.setState({ stateList: nextProps.listOfSelectedStatesList });
    }
  }

  updateFilterList(nextPropValues, field) {
      let listOfFilterValues = this.state.filterList;
      let addedCountries = nextPropValues.filter(item => {
        return listOfFilterValues.indexOf(`${field}:${item}`) === -1
          ? item
          : null;
      });
      let keyValueList = addedCountries.map(item => {
        return `${field}:${item}`;
      });
      this.setState(prevState => ({
        filterList: prevState.filterList.concat(keyValueList)
      }));
  }

  tagsInputChange(output) {
    let countryList = [];
    let cityList = [];
    let dateOfBirthList = [];
    let dateOfDeathList = [];
    let stateList = [];
    this.setState({ filterList: output });
    output.forEach(element => {
      let keyValueList = element.split(':');
      if (keyValueList[0] === 'country') {
        countryList.push(keyValueList[1]);
      }
      if (keyValueList[0] === 'city') {
        cityList.push(keyValueList[1]);
      }
      if (keyValueList[0] === 'dateofbirth') {
        dateOfBirthList.push(keyValueList[1]);
      }
      if (keyValueList[0] === 'dateofdeath') {
        dateOfDeathList.push(keyValueList[1]);
      }
      if (keyValueList[0] === 'state') {
        stateList.push(keyValueList[1]);
      }
    });
    if (countryList.length !== this.state.countryList.length) {
      this.props.actions.updateCountriesList(countryList);
    }
    if (cityList.length !== this.state.cityList.length) {
      this.props.actions.updateCitiesList(cityList);
    }
    if (dateOfBirthList.length !== this.state.dateOfBirthList.length) {
      this.props.actions.updateDateOfBirthList(dateOfBirthList);
    }
    if (dateOfDeathList.length !== this.state.dateOfDeathList.length) {
      this.props.actions.updateDateOfDeathList(dateOfDeathList);
    }
    if (stateList.length !== this.state.stateList.length) {
      this.props.actions.updateStatesList(stateList);
    }
  }

  render() {
    return (
      <div>
        <TagsInput
          inputProps={{
            className: 'react-tagsinput-input custom',
            placeholder: 'Your Filters:'
          }}
          value={this.state.filterList}
          onlyUnique={true}
          onChange={this.tagsInputChange.bind(this)}
        />
      </div>
    );
  }
}
export default SearchFiltersList;
