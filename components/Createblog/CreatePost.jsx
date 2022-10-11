import { database }from "../../firebase/firebaseConfig.js";
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";

const CreatePost = () => {
  const[title, setTitle] = useState();
  const[content, setContent] = useState();

  const addBlog = (e) => {
    e.preventDefault();
    addDoc(collection(database, "blogs"), {
      title: title,
      content: content,
    });
    setContent("");
    setTitle("");
  }
  return (
    <div>
      <h2>Add Blog</h2>
      <form className="add">
        <div>
          Title<br />
          <input value={title}
              onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          Content<br />
          <textarea value={content}
              onChange={(e) => setContent(e.target.value)}/>
        </div>
        <button onClick={addBlog}>Save</button>
      </form>
    </div >
  )
}
export default CreatePost;