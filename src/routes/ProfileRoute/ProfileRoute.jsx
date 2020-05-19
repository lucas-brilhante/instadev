import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const {username} = useParams();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      const users = await axios.get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');
      const user = users.data.filter((user) => user.username === username)[0];
      setUser(user);

      const posts = await axios.get(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`);
      setPosts(posts.data);

      setIsFetching(false);
    }

    fetchData();
  },[username])

  const {avatar, name} = user;

  return (
    <div data-testid="profile-route">
      {isFetching && <Loading />}
      <UserProfile avatar={avatar} name={name} username={username}/>
      <UserPosts posts={posts} />
    </div>
  );
};

export default ProfileRoute;
