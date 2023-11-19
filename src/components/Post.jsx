import React from "react";
import styles from "../styles/Post.module.css";
import Dot from "./Dot";
import Icon from "./Icon";

const Post = ({ post, id }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingDiv}>
        <h2>{post.title}</h2>
        <Icon type="like" color="#FFA33C" />
      </div>

      <div className={styles.details}>{post.details}</div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.mood}>{post.mood}</span> by {id}
        </div>
        <div className={styles.footerRight}>
          <p>{post.date}</p> <Dot /> <p>2 mins Read</p> <Dot />
          <p>{post.views} Views</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
