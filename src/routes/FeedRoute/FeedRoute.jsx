import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');
      if(users !== null){
        setUsers(users.data);
        const stories = await axios.get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories');
        setStories(stories.data)

        let users_id = users.data.map(user => user.id);
        
        users_id.map(async id => {
          const posts = await axios.get(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`);
          setPosts(prev => [...prev, ...posts.data]);
        })

        setIsFetching(false);
      }
    }

    fetchData();
    
  }, []);

  const getUserHandler = (user_id) => {
    return users.filter(user => user.id === user_id)[0];
  }

  return (
    <div data-testid="feed-route">
      {isFetching && <Loading />}
      <Stories stories={stories} getUserHandler={getUserHandler} />
      <Posts posts={posts} getUserHandler={getUserHandler} />
    </div>
  );
};

export default FeedRoute;
