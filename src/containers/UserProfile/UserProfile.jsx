import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  const show_avatar = avatar ?
    avatar :
    "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png";

  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img alt='' src={show_avatar} />
            </div>
            <p className="user__name">
              {name}
              <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
