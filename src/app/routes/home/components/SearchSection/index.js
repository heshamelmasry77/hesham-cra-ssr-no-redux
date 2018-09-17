import React, {Component} from 'react';
import './styles/SearchSection.css';
// import Search from './../../../shared/Search';

class SearchSection extends Component {
  render() {
    return (
        <div className="SearchSection">
          <h1>find your <span>h</span>appy space.</h1>
          <h1>Change your <span>w</span>orld</h1>
          <Search/>
        </div>
    );
  }
}

SearchSection.propTypes = {};

SearchSection.defaltProps = {};

export default SearchSection;
