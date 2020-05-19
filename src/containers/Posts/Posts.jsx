import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    {posts.map((post)=> {
      const userInfo = getUserHandler(post.userId);
      return <Post key={post.id} postInfo={post} userInfo={userInfo} />
    })}
  </div>
);

export default Posts;
