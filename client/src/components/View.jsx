import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to access something from a parameter
import axios from "axios";

const View = () => {
  let postId = useParams().postId;

  const [post, setPost] = useState({});

  const getPost = async () => {
    const { data } = await axios.get(`/api/${postId}`);
    setPost(data.post);
    // console.log(postId);
    // console.log(post);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <p>{post.text}</p>
      <p>{post.image}</p>
      <p>{post.name}</p>
    </div>
  );
};

export default View;
