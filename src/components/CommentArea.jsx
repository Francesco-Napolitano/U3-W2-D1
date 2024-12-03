import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRlNDEyYTc0Yjc3ZDAwMTVkM2YwODEiLCJpYXQiOjE3MzMxODE3MzgsImV4cCI6MTczNDM5MTMzOH0.7MK7iOtEc63x4jepVGxGtV5m-wv0tvqBLN8dOol7_OM',
        },
      }
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to fetch comments')
        }
      })
      .then((comments) => {
        this.setState({ comments: comments, isLoading: false, isError: false })
      })
      .catch((error) => {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      })
  }

  componentDidMount = async () => {
    if (this.props.asin){
      this.getComments() 
    } else {
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.getComments()
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea
