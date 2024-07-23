import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Postlist />
    </div>
  );
}

function Header() {
  return (
    <div className="text-center mt-5">
      <h1> NEWS BLOG</h1>
      <p> This is news blog</p>
      <button type="button" className="btn btn-warning">
        Read Blogs
      </button>
    </div>
  );
}

function Postlist() {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

function Post({ post }) {
  return (
    <div className="card mt-5 ">
      <div className="card-body">
        <h1> {post.title}</h1>
        <p> {post.body}</p>
      </div>
    </div>
  );
}

export default App;
