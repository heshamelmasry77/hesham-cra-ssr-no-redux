import React, {Component} from 'react';
import './styles/TopLocationsSearch.css';
import {Link} from 'react-router-dom';

class TopLocationsSearch extends Component {
  render() {
    return (
        <div className="TopLocationsSearch-wrapper">
          <div className="TopLocationsSearch">
            <h4>Top Locations:</h4>
            <Link to={'/'}><p>johannesburg</p> <span>JHB</span></Link>
            <Link to={'/'}><p>cape town</p> <span>CPT</span></Link>
            <Link to={'/'}><p>bloemfontein</p> <span>BFN</span></Link>
            <Link to={'/'}><p>durban</p> <span>DUR</span></Link>
            <Link to={'/'}><p>port elizabeth </p><span>PE</span></Link>
            <Link to={'/'}><p>pretoria</p><span>PTA</span></Link>
          </div>
        </div>
    
    );
  }
}

TopLocationsSearch.propTypes = {};

TopLocationsSearch.defaltProps = {};

export default TopLocationsSearch;
