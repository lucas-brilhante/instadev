import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      const users = await axios.get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');
      setUsers(users.data);
    }

    fetchData();
  },[])

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users}/>
    </div>
  );
};

export default UsersRoute;
