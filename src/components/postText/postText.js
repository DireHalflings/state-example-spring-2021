import './postText.css';

const PostText = ({ text }) => {
  return (
    <div className="post-text-container">
      <div className="post-text">
        { text }
      </div>
    </div>
  );
}

export default PostText;