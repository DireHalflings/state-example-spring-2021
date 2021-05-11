import './likedBar.css';

const LikedBar = ({ likes }) => {
  return (
    <div className="like-bar-container">
      <div className="like-bar">
        <i className="far fa-thumbs-up"></i><span className="liked-bar__like-text">{ likes } People</span>liked this.
      </div>
    </div>
  );
}

export default LikedBar;