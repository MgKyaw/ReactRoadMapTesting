// import React, { useState, useEffect } from "react";
// import { useTrail, animated } from "react-spring";

// function App() {
//   const [items, setItems] = useState([
//     { id: 1, content: "This is a div illustrating a trail animation" },
//     { id: 2, content: "This is a div illustrating a trail animation" },
//     { id: 4, content: "This is a div illustrating a trail animation" },
//     { id: 5, content: "This is a div illustrating a trail animation" },
//   ]);
//  []);

//   const trail = useTrail(items.length, {

//     from: { opacity: 1, transform: "translateY(0px)" },
//     to: { opacity: 0, transform: "translateY(100px)" },
//     delay: 400, // Add a delay between animations
//     duration: 2000, // Customize the animation duration
//   });

//   return (
//     <div className="container">
//       {trail.map((props, index) => (
//         <animated.div key={items[index].id} style={props} className="item">
//           {items[index].content}
//         </animated.div>
//       ))}
//     </div>
//   );
// }

// export default App;