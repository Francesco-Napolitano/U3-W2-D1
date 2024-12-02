import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from 'react-bootstrap'
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'
import CommentArea from './components/CommentArea'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Row>
          <Col xs={8}>
            <Welcome />
            {/* <AllTheBooks /> */}
            <BookList books={fantasy} />
          </Col>
          <Col xs={4}>
            <CommentArea />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
