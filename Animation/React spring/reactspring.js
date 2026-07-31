import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const opacityAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      tension: 200, 
      friction: 20 
    }
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleVisibility} aria-label={isVisible ? 'Hide' : 'Show'}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <animated.div style={opacityAnimation}>
        This text will fade in and out with spring physics.
      </animated.div>
    </div>
  );
}
export default App;