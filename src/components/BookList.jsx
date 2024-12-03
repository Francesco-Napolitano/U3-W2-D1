import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    asin: '',
  }

changeBookListState = (newAsin) => {
  this.setState({ asin: newAsin })
}  

  render() {
    return (
      <>
        <Row className="mt-5">
          <Col xs={8}>
            <h3 className="text-center">Libri</h3>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={7} md={4} key={b.asin}>
                    <SingleBook book={b} changeBookListState={this.changeBookListState} selectedBook={this.state.asin} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={4}>
            <h3 className="text-center">Commenti</h3>
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList

