import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [following, setFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1);

  const handleFollow = () => {
    setFollowing(!following);
  }

  const handleLike = () => {
    if(liked)
      setLikes(likes-1);
    else
      setLikes(likes+1);
    setLiked(!liked);
  }

  const renderFollowing = () => {
    if (!following)
      return <button onClick={handleFollow} className="follow-btn">Seguir</button>

    return <button onClick={handleFollow} className="follow-btn is-following">Seguindo</button>
  }

  const rederLikeButtom = () => {
    if (!liked)
      return (
        <button onClick={handleLike}>
          <i className="far fa-heart"></i>
        </button>
      )

    return (
      <button onClick={handleLike}>
        <i className="fas fa-heart"></i>
      </button>
    )
  }

  const { name, avatar, username } = userInfo;
  const { imageUrl, comments } = postInfo;
  return (
    <article className="post" data-testid="post">
      <div className="post__header">
        <div className="user">
          <Link to={`/users/${username}`} className="user__thumb">
            <img className="post__figure" alt='' src={avatar} />
          </Link>
          <Link to={`/users/${username}`} className="user__name">{name}</Link>
        </div>
        {renderFollowing()}
      </div>

      <div className="post__context">
        <div className="post__figure">
          <img alt='' src={imageUrl} />
        </div>
        <div className="post__controls">
          <div className="post__control">
            {rederLikeButtom()}
          </div>
          <div className="post__status">
            <div className="user">
              <span>curtido por</span>
              <Link to="/">&nbsp;{comments[0]?comments[0].name:""}</Link>
              <span>&nbsp;e {likes>1?"outras":"outra"}</span>
              <Link to="/">&nbsp;{likes} {likes>1?"pessoas":"pessoa"}.</Link>
            </div>
          </div>
        </div>
      </div>

    </article>
  );
};

export default Post;
