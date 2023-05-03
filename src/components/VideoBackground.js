import React, { useEffect, useRef } from 'react';
import styles from '../styles/VideoBackground.module.css';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className={styles['video-background']}>
      <Controller>
        <Scene
          triggerElement={videoRef.current}
          triggerHook={0.5}
          duration="100%"
          onEnter={() => {
            videoRef.current.play();
          }}
          onLeave={() => {
            videoRef.current.pause();
          }}
        >
          <video ref={videoRef} className={styles.video} autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/ball.mp4`} type="video/mp4" />
          </video>
        </Scene>
        <Scene
          triggerElement={videoRef.current}
          triggerHook={0.5}
          duration="100%"
          tweenChanges
        >
          {progress => {
            // Define the tween variable here
            const tween = gsap.to(videoRef.current, {
              opacity: 1,
              y: -100,
            });
            tween.progress(progress);

            return (
              <>
                <div className={styles.content}>
                  <div className={styles.centered}>
                    <h1 className={styles.title} data-aos="fade-up">Welcome to my website</h1>
                    <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="500">I am a React developer</p>
                  </div>
                </div>
              </>
            );
          }}
        </Scene>
      </Controller>
    </div>
  );
}

export default VideoBackground;