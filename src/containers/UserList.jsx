import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/UserInfo'


import {fetchUsers, changeUser} from '../actions'

class UserList extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render() {
        const {data} = this.props
        if(!data){
            return <p>Load...</p>
        }
        return (
            <table className="user-list table table-striped">
             <thead>
                 <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Phone</th>
                 </tr>
             </thead>
             <tbody>
                {data.map((user, index) => {
                    return <UserInfo user={user} changeUser={this.props.changeUser} index={index} key={index} />
                })}
             </tbody>
         </table>
        )
    }
}

const mapStateToProps = ({sort}) => ({
    data: sort.data
})

const mapDispatchToProps = {
    fetchUsers,
    changeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)