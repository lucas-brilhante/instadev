import React from 'react';

//import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container">
    <section className="user-posts" data-testid="user-posts">
      {posts.map((post) => {
        const { imageUrl } = post;
        return <article class="post" data-testid="post">
          <figure class="post__figure">
            <img src={imageUrl} alt="" />
          </figure>
        </article>
      })}
    </section>
  </div>
);

export default UserPosts;
