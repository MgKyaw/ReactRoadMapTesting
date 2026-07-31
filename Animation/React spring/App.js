import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = () => {
    if (items.length === 0) return;
    const newItems = items.slice(0, -1);
    setItems(newItems);
  };

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  });

  return (
    <div className="transitionDiv">
      <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeItem}>Remove Item</button>
      </div>
      <div className="transitionItem">
        {transitions((style, item) => (
          <animated.div style={style} className ='list'>{item}</animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;