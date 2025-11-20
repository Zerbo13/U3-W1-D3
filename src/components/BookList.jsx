import { Component } from 'react';
import romance from '../data/romance.json';
import { Col, Container, Row } from 'react-bootstrap';
import SingleBooks from './SingleBooks';

class BookList extends Component {
render() {
return(
<Container>
<Row>
{
romance.map((book) => {
return (
 <SingleBooks
 title={book.title}
 imgUrl={book.img}
 description={book.category}
 />
)})
}
</Row>
</Container>
)
}
}
export default BookList;