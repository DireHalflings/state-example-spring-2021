import './avatar.css';

const Avatar = ({ avatarImage, name, time }) => {
  return (
    <div className="avatar">
      <div className="avatar-image-container">
        <img className="avatar-image" src={ avatarImage } alt="avatar" />
      </div>
      <div className="avatar-text-container">
        <div className="avatar-text__user-name">
          { name }
        </div>
        <div className="avatar-text__time-stamp">
          <em>{ time } <i className="fas fa-globe-americas"></i></em>
        </div>
      </div>
    </div>
  );
};

export default Avatar;