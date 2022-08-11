import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRef } from '../../pages';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const createPost = async () => {
    console.log("123")
    addDoc(colRef, { title: title, text: text }).then(() =>
      console.log("sucess")).catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Add Blog</h2>
      <form className="add">
        <div>
          Title<br />
          <input onChange={(event) => {
            setTitle(event.target.value);
          }} />
        </div>
        <div>
          Content<br />
          <textarea onChange={(event) => {
            setText(event.target.value);
          }} />
        </div>
        <button onClick={createPost}>Save</button>
      </form>
    </div >
  )
}
export default CreatePost;