import './likeAndShare.css';

const LikeAndShare = ({ count }) => {
  return (
    <div className="like-and-share-container">
      <div className="like-and-share">
        <div className="like-and-share__text">
          Like • Share
        </div>
        <div className="like-and-share__comments">
          <i className="far fa-comment-dots"></i> { count }
        </div>
      </div>
    </div>
  );
}

export default LikeAndShare;