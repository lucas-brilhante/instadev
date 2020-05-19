import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser }) => {
  const { avatar, name, username } = infoUser;

  const show_avatar = avatar ?
    avatar :
    "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png";

  return (
    <article className="post">
      <header className="post__header">
        <Link className="user" data-testid="user" to={`/users/${username}`}>
          <div className="user__thumb">
            <img alt='' src={show_avatar} />
          </div>
          <div className="user__name">
            {name}
          </div>
        </Link>
      </header>
    </article>
  )
};

export default User;
