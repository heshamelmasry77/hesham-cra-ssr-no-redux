import React, {Component} from 'react';
import './styles/WhatIsRoomMe.css';
// import SearchAndLogin from './../../../shared/SearchAndLogin';
// import logo from '../../../../assets/images/room-me-logo-indicator-bright.png'; // Tell Webpack this JS file uses this image

class WhatIsRoomMe extends Component {
  render() {
    return (
        <div className="WhatIsRoomMe">
          <div>
            <h4>What is RoomMe ?</h4>
          </div>
          {/*<SearchAndLogin hideAccount={true}/>*/}
          <div className="logo-indicator">
            {/*<img src={logo} alt="RoomMe Logo"/>*/}
          </div>
          <div>
            <p><span>RoomMe</span> is a great way to find your new <br/> Home
            </p>
            <p>Now you can Rent your room or search or a new room to stay in.<br/>
              Don't waste your time asking or wondering.<br/> <br/>
              With <span>RoomMe</span> you will find what you are searching for with<br/>
              various offers.
            </p>
          </div>
        </div>
    );
  }
}

WhatIsRoomMe.propTypes = {};

WhatIsRoomMe.defaltProps = {};

export default WhatIsRoomMe;
