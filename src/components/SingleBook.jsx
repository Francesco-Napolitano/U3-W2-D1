import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card
          onClick={() => { this.setState({ selected: !this.state.selected })
                  this.props.changeBookListState(this.props.book.asin)
        }}

          style={{ border: this.props.selectedBook === this.props.book.asin ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
