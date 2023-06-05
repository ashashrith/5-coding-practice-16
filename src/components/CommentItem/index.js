// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDeleteComment} = props
  const {name, comment, firstClassName, isLiked, id} = commentDetails

  const firstInitial = name[0]

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickButton = () => {
    toggleIsLiked(id)
  }

  const deleteComment = () => {
    onDeleteComment(id)
  }

  return (
    <li className="list">
      <div className="div">
        <div className={firstClassName}>
          <p className="initial">{firstInitial}</p>
        </div>
        <div className="mini">
          <div className="name-cont">
            <h1 className="name-head">{name}</h1>
            <p className="p-cont">formatDistanceToNow(new Date())</p>
          </div>
          <p className="comment-cont">{comment}</p>
        </div>
      </div>
      <div className="final-cont">
        <div className="like-cont">
          <img src={likeImage} className="like-img" alt="like" />
          <button type="button" onClick={onClickButton} className="like">
            Like
          </button>
        </div>
        <button
          className="del-btn"
          type="button"
          data-testid="delete"
          onClick={deleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
