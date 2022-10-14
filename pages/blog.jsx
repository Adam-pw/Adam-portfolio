import Footer from "../components/Footer/Footer";
import { Navbarh } from "../components/Navbarh/Navbarh";
import Head from "next/head";
import { Blogdes } from "../components/Blogdes/Blogdes";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { database } from "../firebase/firebaseConfig.js";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const q = query(collection(database, "blogs"));
    onSnapshot(q, (querySnapshot) => {
      setBlogs(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <>
      <Navbarh />
      {blogs.map((blog) => (
          <Blogdes key={blog.id} arr={blog}/>
      ))}
      <Footer />
    </>
  );
}
