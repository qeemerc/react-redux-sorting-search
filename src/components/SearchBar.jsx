import React from 'react'

export default ({ searchUsers, term }) => {
  return (
    <div>
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={(e) => searchUsers(e)}
      />
    </div>
  )
}