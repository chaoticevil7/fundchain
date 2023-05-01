import React, { useEffect } from 'react';
import { Element } from 'react-scroll';

import styles from '../styles/VideoBackground.module.css';

function VideoBackground() {
  useEffect(() => {
    const video = document.querySelector(`.${styles.video}`);
    const element = document.querySelector(`.${styles.element}`);

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 0) {
        video.classList.add(styles['video-play']);
      } else {
        video.classList.remove(styles['video-play']);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles['video-background']}>
      <Element name="video" className={styles.element}>
      <video className={styles.video} autoPlay muted loop>
        <source src={`${process.env.PUBLIC_URL}/ball.mp4`} type="video/mp4" />
        <source src={`${process.env.PUBLIC_URL}/ball.webm`} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      </Element>
      <div className={styles.content}>
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default VideoBackground;