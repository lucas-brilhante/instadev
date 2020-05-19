import React, { useCallback, useState, useRef } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const { avatar, name, username } = user;
  const [video_progress, setVideoProgress] = useState(0);

  const show_avatar = avatar ? avatar : "";
  const video_ref = useRef(null);

  const handleProgress = useCallback(() => {
    if (video_ref.current) {
      const progress = (video_ref.current.currentTime * 100) / (video_ref.current.duration) + '%';
      setVideoProgress(progress);
    }
  },[]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${username}`} className="user__thumb">
              <img alt='' src={show_avatar} />
            </Link>
            <Link to={`/users/${username}`} className="user__name">
              {name}
            </Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed" style={{ width: video_progress }} />
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            onTimeUpdate={handleProgress}
            ref={video_ref}
            autoPlay
            className="video-player"
            onEnded={handleClose}
            playsInline
            src={story.videoUrl}
          />
        </section>
      </div>
    </section>
  );
};

export default Story;
