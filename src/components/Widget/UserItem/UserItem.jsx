import React from "react";
import './UserItem.css';
import { Visibility } from '@mui/icons-material';

export default function UserItem(props) {
  return (
    <li className="userItem">
      <img
        src={props.img}
        alt="user avatar"
        className="userImg"
      />
      <div className="userDetails">
        <span className="userName">{props.name}</span>
        <span className="userTitle">{props.title}</span>
      </div>
      <button className="userDetailButton">
        <Visibility className="displayIcon" />
        Display
      </button>
    </li>
  );
}
