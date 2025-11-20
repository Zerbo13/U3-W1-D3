import MyNav from "./components/MyNav";
import SingleBooks from "./components/SingleBooks";
import romance from "./data/romance.json";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />

      <SingleBooks 
        title={romance[0].title}
        imgUrl={romance[0].img}
        description={romance[0].category}
      />
      <BookList />
    </>
  );
}

export default App;

