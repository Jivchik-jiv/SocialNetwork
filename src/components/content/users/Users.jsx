import React from "react";
import s from "./Users.module.css";

const Users = (props) => {

  
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagesCountBox}>
        {pages.map((p) => {
          return (
            <span
              className={p === props.currentPage ? s.selectedPage : ""}
              onClick={() => props.onPageChange(p)}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u, i) => {
        let imageUrl =
          "https://telegram.org.ru/uploads/posts/2018-04/1523986370_file_488917.jpg";
        return (
          <div className={s.extraUsersBox} key={u.id}>
            <img src={u.photos.small || imageUrl} alt="#" />
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>follow</button>
            )}
            <h2>{u.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
