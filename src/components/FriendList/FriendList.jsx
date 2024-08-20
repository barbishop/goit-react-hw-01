/* eslint-disable react/prop-types */
import { FriendListItem } from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
