import { useTransition, animated } from "@react-spring/web";
import "./App.css";

const name = "Product1";
const name1 = "Product2";
const name2 = "Product3";

function App({ data = [name, name1, name2] }) {
  const transitions = useTransition(data, {
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0.5 },
    config: { duration: 2500 },
  });

  return transitions((style, item) => (
    <div className="nameBody">
      <animated.div style={style} className="nameDiv">
        {item}
      </animated.div>
    </div>
  ));
}

export default App;