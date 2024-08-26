import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './SearchBar';
import RecentPost from './recentPost';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar />
          <RecentPost />
        </div>
      </div>
    );
  }
}
