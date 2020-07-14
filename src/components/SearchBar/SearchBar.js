import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ 
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
    }

    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSortByChange (sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleLocationChange (e) {
    this.setState({location: e.target.value});
  }

  handleTermChange (e) {
    this.setState({term: e.target.value});
  }

  handleSearch (e) {
    this.props.searchYelp(this.state.term, this.state.location,
      this.state.sortBy);
    e.preventDefault();
  }

  getSortByClass (sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  renderBySortOptions() {
      return Object.keys(this.sortByOptions)
      .map(sortByOption => {
          let sortByOptionValue = this.sortByOptions[sortByOption];
          return ( 
  <li className={this.getSortByClass(sortByOptionValue)} 
      key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
    {sortByOption}
  </li>
          );
      });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleSearch(e);
    }
  }

  render() {
      return (
<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderBySortOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input className="Search Businesses" placeholder="Search Businesses" onChange={this.handleTermChange} onKeyUp={this.handleKeyUp} required/>
    <input className="Where?" placeholder="Where?" onChange={this.handleLocationChange} onKeyUp={this.handleKeyUp} required/>
  </div>
  <div className="SearchBar-submit">
    <button onClick={this.handleSearch}>Let's Go</button>
  </div>
</div>
        );
  }
}

export default SearchBar;