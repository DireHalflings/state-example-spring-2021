import Avatar from '../avatar/avatar';
import PostText from '../postText/postText';
import LikeAndShare from '../likeAndShare/likeAndShare';
import LikedBar from '../likedBar/likedBar';

import './post.css';

const Post = ({ avatarImage, text, name, time, commentCount, likes }) => {
  return (
    <div className="post-container">
      <Avatar avatarImage={ avatarImage } name={ name } time={ time } />
      <PostText text={ text }/>
      <LikeAndShare count={ commentCount } />
      <LikedBar likes={ likes } />
    </div>
  );
};

export default Post;