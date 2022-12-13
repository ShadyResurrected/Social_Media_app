import React, { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";

import axios from "axios";

import "./feed.css";

const feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  // Empty array as a third parameter means run this useEffect hook only once
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "http://localhost:8800/api/posts/profile/" + username
          )
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/6396b6990b8f7dd4e8151a7a"
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default feed;
