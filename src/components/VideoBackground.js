import React, { useEffect } from 'react';
import { Element } from 'react-scroll';

function VideoBackground() {
  useEffect(() => {
    const video = document.querySelector('.video');
    const element = document.querySelector('.element');

    // Add the 'video-play' class to the video element when the top of the
    // 'element' component reaches the top of the viewport
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 0) {
        video.classList.add('video-play');
      } else {
        video.classList.remove('video-play');
      }
    }

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-background">
      <Element name="video" className="element">
        <video className="video" autoPlay muted loop>
          <source src="~/my0app/src/components/ball.mp4" type="video/mp4" />
        </video>
      </Element>
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default VideoBackground;

