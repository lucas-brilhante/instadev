import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [user, setUser] = useState(false);

  const handleClose = () => {
    setShowStory(false);
  }

  const handleClick = (story, user) => () => {
    setShowStory(story);
    setUser(user)
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story,index) => {
            const user = getUserHandler(story.userId);
            return (
              <button key={story.id} className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`} onClick={handleClick(story, user)}>
                <div className="user__thumb__wrapper">
                  <img alt={user.name} src={user.avatar} />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {showStory && <Story story={showStory} user={user} handleClose={handleClose} />}

    </React.Fragment>
  );
};

export default Stories;
