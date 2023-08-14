import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  let navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    text: "",
    image: "",
  });

  const updateInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createPost = async () => {
    await axios.post("/api", post, {
      headers: { "Content-Type": "application/json" },
    });
    Swal.fire("Post created successfully!", "", "success");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            value={post.name}
            onChange={updateInput}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="text"
            aria-label="text"
            aria-describedby="basic-addon1"
            value={post.text}
            onChange={updateInput}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            name="image"
            type="text"
            className="form-control"
            placeholder="Image"
            aria-label="Image"
            aria-describedby="basic-addon1"
            value={post.image}
            onChange={updateInput}
          />
        </div>
        <button className="btn btn-primary" onClick={createPost}>
          Create
        </button>
      </div>
    </>
  );
};

export default Create;
