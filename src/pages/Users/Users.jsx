import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {


    return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2" style={{marginTop: "30px"}}>
            <h1 style={{fontWeight: "400"}}>Users</h1>
            <UsersList/>
        </div>
    </div>
    )
}
//fontWeight slims a font, eg. it's like reducing the thinkness of a bolded word.
export default Users