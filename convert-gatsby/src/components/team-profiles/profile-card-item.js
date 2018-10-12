import React from 'react';

const ProfileCardItem = ({
  image,
  name,
  skills,
  description
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="team-item">
        <div className="header">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <strong>{name}</strong>
            <span>{skills}</span>
          </div>
        </div>
        <div className="body">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardItem;