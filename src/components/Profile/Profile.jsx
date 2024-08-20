/* eslint-disable react/prop-types */

import s from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.img} src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.stats__item}>
          <span>Followers</span>
          <span className={s.stats__num}>{followers}</span>
        </li>
        <li className={s.stats__item}>
          <span>Views</span>
          <span className={s.stats__num}>{views}</span>
        </li>
        <li className={s.stats__item}>
          <span>Likes</span>
          <span className={s.stats__num}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
