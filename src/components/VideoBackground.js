import React, { useEffect, useRef } from 'react';
import styles from '../styles/VideoBackground.module.css';
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    
    const scene = new ScrollMagic.Scene({
      triggerElement: videoRef.current,
      triggerHook: 0.5,
      duration: '100%',
    })
      .addTo(controller)
      .on('enter', () => {
        videoRef.current.play();
      })
      .on('leave', () => {
        videoRef.current.pause();
      });
  
    const tween = gsap.to(videoRef.current, {
      opacity: 1,
      y: -100,
    });
  
    const scene2 = new ScrollMagic.Scene({
      triggerElement: videoRef.current,
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(tween)
      .addTo(controller);
      
    return () => {
      scene.destroy(true);
      scene2.destroy(true);
      controller.destroy(true);
    };
  }, []);
  

  return (
    <div className={styles['video-background']}>
      <video ref={videoRef} className={styles.video} autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/ball.mp4`} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.centered}>
          <h1 className={styles.title} data-aos="fade-up">Welcome to my website</h1>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="500">I am a React developer</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
