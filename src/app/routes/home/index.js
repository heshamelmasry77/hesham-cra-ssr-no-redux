import React from 'react';
import Page from '../../components/page';
import './styles/Home.css';
import TopLocationsSearch from './components/TopLocationsSearch';
// import WhatIsRoomMe from './components/WhatIsRoomMe';
// import GetStarted from './components/GetStarted';
import PostAndSearch from './components/PostAndSearch';
// import SearchSection from './components/SearchSection';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
// import Header from '../shared/Header/Header';

export default () => (
  <Page id="home" title="Home" description="This is home really cool stuff.">
    {/*<Header/>*/}
    <TransitionGroup>
      <CSSTransition
        timeout={500}
        classNames="fade"
      >
        <div className="Home text-center">
          <TopLocationsSearch/>
          {/*<SearchSection/>*/}
          {/*<WhatIsRoomMe/>*/}
          {/*<GetStarted/>*/}
          <PostAndSearch/>
        </div>
      </CSSTransition>
    </TransitionGroup>
  </Page>
);

