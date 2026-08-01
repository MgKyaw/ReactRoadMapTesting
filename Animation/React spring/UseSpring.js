import { useSprings, animated } from "@react-spring/web";

function App() {
  const [springs, api] = useSprings(
    3,
    () => ({
      from: { scale: 0, color: "blue" },
      to: { scale: 1, color: "red" },
      config: { duration: 2500 },
    }),
    []
  );

  return (
    <div>
      {springs.map((props) => (
        <animated.div style={props} className="springsText">
          _______
        </animated.div>
      ))}
    </div>
  );
}

export default App;