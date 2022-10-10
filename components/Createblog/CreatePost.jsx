// import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
// import { colRef } from '../../pages';

const CreatePost = () => {

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
          <textarea />
        </div>
        <button>Save</button>
      </form>
    </div >
  )
}
export default CreatePost;