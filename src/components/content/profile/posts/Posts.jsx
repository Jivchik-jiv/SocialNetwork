import React from "react";
import MainPost from "./mainPost/MainPost";
import NewPost from "./newPost /NewPost";






const Posts = (props) => {

  const addNewPost = (value) =>{
    props.data.onAddNewPost(value.newPost)
  }

  const posts = props.data.state.posts.map((p) => <MainPost title={p.title} text = {p.text} image = {p.image} key= {p.id}/>)

  return (
    <div>
      <NewPost data = {props.data} onSubmit = {addNewPost}/>
      {posts}

     
     
    </div>
  );
};

export default Posts;
