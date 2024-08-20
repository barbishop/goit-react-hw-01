/* eslint-disable react/prop-types */

import clsx from "clsx";
import s from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(s.status, {
          [s.online]: isOnline,
          [s.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
