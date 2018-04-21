import React from 'react'

export default ({sortUsers, resetFilters}) => {

  // resetData = () => {
  //   this.props.update({
  //     data: this.props.initialData,
  //     term: '',
  //     active: 0
  //   });
  // }

    return (
      <div className="toolbar">
        <button className="btn btn-default" onClick={() => sortUsers('name')}>
          <i className="fa fa-sort-alpha-asc"></i>  Sort by name
        </button>
        <button className="btn btn-default" onClick={() => sortUsers('age')}>
          <i className="fa fa-sort-numeric-desc"></i>  Sort by age
        </button>
        <button className="btn btn-danger" onClick={() => resetFilters()}>
          <i className="fa fa-ban"></i>  Reset
        </button>
      </div>
    )
}