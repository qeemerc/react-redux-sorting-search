import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  searchUsers,
  sortUsers,
  resetFilters
} from './actions'


import UserList from './containers/UserList'
import ActiveUser from './components/ActiveUser'
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar'


class App extends Component {

  render() {
    const { data, searchUsers, sortUsers, resetFilters, active, term} = this.props;
    return (
      <div className="app container-fluid">
        <div className="row">
          <header>
            <h1>React, Redux sort and search</h1>
          </header>
          </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <SearchBar searchUsers={searchUsers} term={term} />

            <Toolbar sortUsers={sortUsers} resetFilters={resetFilters} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser data={data} active={active} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({sort}) => ({
  data: sort.data,
  active: sort.active,
  term: sort.term
})

const mapDispatchToProps = {
  searchUsers,
  sortUsers,
  resetFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
