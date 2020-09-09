import React from "react";
import Post from "./posts/post";

const post = {
  date: new Date(),
  text: `Today was a good day to try to surf`,
  author: {
    name: "Mariia Mytsko",
    nickname: "@Mariia_Myt",
  },
};

function App() {
  return <Post date={post.date} text={post.text} author={post.author} />;
}

export default App;
