import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <About image={blogData.image} about={blogData.about}></About>
      <Header name={blogData.name}></Header>
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
