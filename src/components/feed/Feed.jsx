import React, { useState, useEffect, useContext } from "react";
import Share from "../share/Share";
import Post from "../post/Post";

import axios from "axios";

import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

const feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const{user} = useContext(AuthContext)

  // Empty array as a third parameter means run this useEffect hook only once
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "/api/posts/profile/" + username
          )
        : await axios.get(
            "/api/posts/timeline/" + user._id
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username,user._id]);

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
