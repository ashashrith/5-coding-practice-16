import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsList = [
  {
    id: uuidv4(),
    name: '',
    comment: '',
    firstClassName: '',
    isLiked: false,
  },
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    commentList: commentsList,
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !prevState.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const latestComment = commentList.filter(each => each.id !== id)

    this.setState({commentList: latestComment})

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const list = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      firstClassName: list,
      isLiked: false,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))

    this.setState(prevState => ({count: prevState.count.commentList.length}))
  }

  render() {
    const {name, comment, count, commentList} = this.state

    return (
      <div>
        <div className="bg-container">
          <div className="container">
            <div className="cont">
              <h1 className="heading">Comments</h1>
              <p className="para">Say something about 4.0 Technologies</p>
              <form className="form" onSubmit={this.onSubmitComment}>
                <input
                  className="name-input"
                  onChange={this.onChangeName}
                  value={name}
                  placeholder="Your Name"
                />
                <input
                  className="comment-input"
                  onChange={this.onChangeComment}
                  value={comment}
                  placeholder="Your Comment"
                />
                <button type="submit" className="btn">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>

          <p className="p">
            <span>
              <div className="span">{count}</div>
            </span>
            comments
          </p>
          <ul className="list-container">
            {commentList.map(each => (
              <CommentItem
                commentDetails={each}
                key={each.id}
                toggleIsLiked={this.toggleIsLiked}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
