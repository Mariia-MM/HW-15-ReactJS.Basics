import React from "react";
import "./posts.css";
import myPhoto from "./img/my-photo.jpg";
import postPhoto from "./img/val-playa.jpg";

const MY_IMAGE = myPhoto;
const POST_IMG = postPhoto;

function formatDate(date) {
  return date.toLocaleDateString();
}
function Post(props) {
  return (
    <>
      <div className="wrapper">
        <div className="userInfo">
          <div className="post-wrapper">
            <img className="profilePhoto" src={MY_IMAGE} alt={myPhoto} />
            {props.author.name}
            <span className="nickname-date">
              {props.author.nickname} . {formatDate(props.date)}
            </span>
          </div>
          <div className="post-text">{props.text}</div>

          <img className="post-photo" src={POST_IMG} alt={postPhoto} />
        </div>
      </div>
    </>
  );
}

export default Post;
