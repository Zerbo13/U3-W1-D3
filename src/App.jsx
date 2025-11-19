import MyNav from "./components/MyNav";
import SingleBooks from "./components/SingleBooks";
import romance from "./data/romance.json";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />

      <SingleBooks 
        title={romance[0].title}
        imgUrl={romance[0].img}
        description={romance[0].category}
      />
    </>
  );
}

export default App;

