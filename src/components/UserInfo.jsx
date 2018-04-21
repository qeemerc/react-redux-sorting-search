import React from 'react'

export default ({user, changeUser, index}) => {
  return (
    <tr onClick={() => changeUser(index)}>
      <td><img width="50px" src={`../images/${user.image}.svg`} alt={user.name} className="user-image" /></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>8 {user.phone}</td>
    </tr>
  )
}